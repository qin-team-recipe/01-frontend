"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { Chef } from "@/app/api/chefs/types";
import { Recipe } from "@/app/api/recipes/types";
import { ChefCard } from "@/components/ChefCard";
import { IconLoading } from "@/components/Icon";
import { RecipeCard } from "@/components/RecipeCard";
import { TabBar } from "@/components/TabBar";

import styles from "./search-target.module.scss";

export default function Page({ params }: { params: { target: string } }) {
  const searchParams = useSearchParams();
  const queryWord = searchParams.get("q");
  const isRecipe = params.target === "recipe";
  const activeTab = isRecipe ? 1 : 2;
  const [searchRecipeResults, setSearchRecipeResults] = useState<Recipe[]>([]);
  const [searchChefResults, setSearchChefResults] = useState<Chef[]>([]);
  const router = useRouter();

  let searchTitle = "";
  if (queryWord) {
    const decodeQueryWord = decodeURIComponent(queryWord);
    searchTitle = `「${decodeQueryWord}」で検索`;
  } else {
    if (isRecipe) {
      searchTitle = "話題のレシピ";
    } else {
      searchTitle = "シェフ一覧";
    }
  }

  const searchRecipe = useCallback(async () => {
    let response;
    setSearchRecipeResults([]);
    if (queryWord) {
      const decodeQueryWord = decodeURIComponent(queryWord);
      response = await fetch(`/api/recipes/search?keyword=${decodeQueryWord}`);

      if (!response.ok) {
        setSearchRecipeResults([]);
        throw new Error("Failed to fetch data");
      }

      const recipes: Recipe[] = await response.json();
      setSearchRecipeResults(recipes);
    }
  }, [queryWord]);

  const searchChef = useCallback(async () => {
    let response;
    if (queryWord) {
      const decodeQueryWord = decodeURIComponent(queryWord);
      response = await fetch(`/api/chefs/search?keyword=${decodeQueryWord}`);
    } else {
      response = await fetch(`/api/chefs`);
    }

    if (!response.ok) {
      setSearchChefResults([]);
      throw new Error("Failed to fetch data");
    }

    const chefs: Chef[] = await response.json();
    setSearchChefResults(chefs);
  }, [queryWord]);

  useEffect(() => {
    const fetchData = async () => {
      if (isRecipe) {
        searchRecipe();
      } else {
        searchChef();
      }
    };
    fetchData();
  }, [queryWord, isRecipe, searchRecipe, searchChef]);

  const tabData = {
    tabs: [
      { id: 1, label: "レシピ" },
      { id: 2, label: "シェフ" },
    ],
    activeTabId: activeTab,
  };

  const handleTab = (id: number) => {
    if (queryWord) {
      const decodeQueryWord = decodeURIComponent(queryWord);
      const encode = encodeURIComponent(encodeURIComponent(decodeQueryWord));
      const target = id === 1 ? "recipe" : "chef";
      router.push(`/search/${target}?q=${encode}`);
    } else {
      const target = id === 1 ? "recipe" : "chef";
      router.push(`/search/${target}`);
    }
  };

  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isObserver, setIsObserver] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (queryWord) {
      setIsObserver(false);
    } else {
      setIsObserver(true);
    }
  }, [queryWord]);

  const getMoreRecipeData = useCallback(async () => {
    const response = await fetch(`/api/recipes?page=${pageNumber}`);
    const addRecipes = await response.json();

    if (addRecipes && addRecipes.length > 0) {
      setSearchRecipeResults((prev) => [...prev, ...addRecipes]);
      setIsObserver(true);
    } else {
      if (observerRef.current && targetRef.current) {
        observerRef.current.unobserve(targetRef.current);
      }
      setIsObserver(false);
    }

    setPageNumber((prev) => prev + 1);
  }, [pageNumber]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getMoreRecipeData();
      }
    });

    if (targetRef.current) {
      observerRef.current.observe(targetRef.current);
    }

    const currentTargetRef = targetRef.current;
    return () => {
      if (observerRef.current && currentTargetRef) {
        observerRef.current.unobserve(currentTargetRef);
      }
    };
  }, [getMoreRecipeData]);

  return (
    <div>
      <TabBar data={tabData} onDataSend={handleTab} />
      <div className={styles.result}>
        <div className={styles["result-title"]}>{searchTitle}</div>
        {isRecipe ? (
          <div>
            <div className={styles["result-recipe-list"]}>
              {searchRecipeResults.map((result, index) => (
                <Link href={`/recipe/${result.id}`} key={index}>
                  <RecipeCard
                    favCountNumber={result.favorite_count}
                    name={result.name}
                    description={result.description}
                  />
                </Link>
              ))}
            </div>
            <div>
              {isObserver ? (
                <div ref={targetRef} className={styles.loading}>
                  <IconLoading />
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className={styles["result-chef-list"]}>
            {searchChefResults.map((chef) => (
              <div key={chef.id}>
                <Link href={`/chef/${chef.id}`} key={chef.id}>
                  <ChefCard
                    src={chef.thumbnail}
                    name={chef.name}
                    description={chef.description}
                    count={chef.recipe_count}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
