"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { Header } from "@/components/Header";
import { IconArrowBack, IconLoading } from "@/components/Icon";
import { RecipeCard } from "@/components/RecipeCard";
import { useUser } from "@/hooks/useUser";

import { Recipe } from "../api/types";
import styles from "./new-recipes.module.scss";

export default function Page() {
  const icon = <IconArrowBack color="#1A1523" />;
  const [newRecipes, setNewRecipes] = useState<Recipe[]>([]);

  // インフィニットローディング用
  const observerRef = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isObserver, setIsObserver] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);

  // インフィニットローディング用のデータ取得
  const { userId } = useUser();
  const getMoreRecipeData = useCallback(async () => {
    const response = await fetch(
      `/api/users/${userId}/favorite_new_recipes?page=${pageNumber}`
    );
    const addRecipes = await response.json();

    if (addRecipes && addRecipes.length > 0) {
      setNewRecipes((prev) => [...prev, ...addRecipes]);
      setIsObserver(true);
    } else {
      if (observerRef.current && targetRef.current) {
        observerRef.current.unobserve(targetRef.current);
      }
      setIsObserver(false);
    }

    setPageNumber((prev) => prev + 1);
  }, [pageNumber, userId]);

  // インフィニットローディング用のtargetRefを監視
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
  }, [getMoreRecipeData, isObserver]);

  return (
    <main className={styles.page}>
      <Header h1 position="left" icon={icon} href="/favorites">
        新着レシピ
      </Header>
      <div>
        <div className={styles["recipe-list"]}>
          {newRecipes.map((recipe, index) => (
            <Link href={`/recipe/${recipe.id}`} key={index}>
              <RecipeCard
                favoriteCount={recipe.favorite_count}
                name={recipe.name}
                description={recipe.description}
                thumbnail={recipe.thumbnail}
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
    </main>
  );
}
