"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { SearchChef } from "@/app/api/chefs/types";
import { SearchRecipe } from "@/app/api/recipes/types";
import { ChefCard } from "@/components/ChefCard";
import { RecipeCard } from "@/components/RecipeCard";
import { TabBar } from "@/components/TabBar";

import styles from "./search-target.module.scss";

export default function Page({ params }: { params: { target: string } }) {
  const searchParams = useSearchParams();
  const queryWord = searchParams.get("q");
  const isRecipe = params.target === "recipe";
  const activeTab = isRecipe ? 1 : 2;
  const [searchRecipeResults, setSearchRecipeResults] = useState<
    SearchRecipe[]
  >([]);
  const [searchChefResults, setSearchChefResults] = useState<SearchChef[]>([]);
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
    if (queryWord) {
      const decodeQueryWord = decodeURIComponent(queryWord);
      response = await fetch(`/api/recipes/search?keyword=${decodeQueryWord}`);
    } else {
      response = await fetch(`/api/recipes`);
    }

    if (!response.ok) {
      setSearchRecipeResults([]);
      throw new Error("Failed to fetch data");
    }

    const recipes: SearchRecipe[] = await response.json();
    setSearchRecipeResults(recipes);
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

    const chefs: SearchChef[] = await response.json();
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
      router.push(`search/${target}?q=${encode}`);
    } else {
      const target = id === 1 ? "recipe" : "chef";
      router.push(`search/${target}`);
    }
  };

  return (
    <div>
      <TabBar data={tabData} onDataSend={handleTab} />
      <div className={styles.result}>
        <div className={styles["result-title"]}>{searchTitle}</div>
        <div className={styles["result-list"]}>
          {searchRecipeResults.map((result) => (
            <div key={result.id}>
              <RecipeCard
                favCountNumber={result.favorite_count}
                description={result.description}
                name={result.name}
              />
            </div>
          ))}
        </div>
        <div className={styles["chef-list"]}>
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
      </div>
    </div>
  );
}
