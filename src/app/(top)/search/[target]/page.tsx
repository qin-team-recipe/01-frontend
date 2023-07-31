"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { RecipeCard } from "@/components/RecipeCard";
import { TabBar } from "@/components/TabBar";
import { SearchRepices } from "@/types/api";

import styles from "./search-target.module.scss";

const fetchSearchRecipes = async (
  keyword: string
): Promise<SearchRepices[]> => {
  const res = await fetch(`/api/v1/search/recipe?keyword=${keyword}`);
  if (!res.ok) {
    console.error("検索結果の取得に失敗しました:");
    // return [];
  }

  // return res.json();
  // TODO: dummy data
  return [
    {
      id: 3,
      name: "グラタン",
      description: "白が200色わかる方",
      favorite_count: 12,
      thumbnail: "https://example.com",
      chef_name: "アンミカ",
      created_at: "2023-6-16 10:45",
      updated_at: "2023-6-20 15:45",
    },
    {
      id: 4,
      name: "スパゲッティ",
      description: "トマトベースのソース",
      favorite_count: 15,
      thumbnail: "https://example.com",
      chef_name: "ジュリア",
      created_at: "2023-6-16 10:45",
      updated_at: "2023-6-20 15:45",
    },
    {
      id: 5,
      name: "グラタン",
      description: "白が200色わかる方",
      favorite_count: 12,
      thumbnail: "https://example.com",
      chef_name: "アンミカ",
      created_at: "2023-6-16 10:45",
      updated_at: "2023-6-20 15:45",
    },
    {
      id: 6,
      name: "スパゲッティ",
      description: "トマトベースのソース",
      favorite_count: 15,
      thumbnail: "https://example.com",
      chef_name: "ジュリア",
      created_at: "2023-6-16 10:45",
      updated_at: "2023-6-20 15:45",
    },
  ];
};

// const fetchTrendingRecipes = async () => {
//   const res = await fetch("/api/v1/trending_recipes");
//   return res.json;
// };

// const fetchChefs = async () => {
//   const res = await fetch("/api/v1/chefs");
//   return res.json;
// };

export default function Page({ params }: { params: { target: string } }) {
  const searchParams = useSearchParams();
  const queryWord = searchParams.get("q");
  const isRecipe = params.target === "recipe";
  const initial = isRecipe ? 1 : 2;
  const [searchRecipeResults, setSearchRecipeResults] = useState<
    SearchRepices[]
  >([]);
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

  useEffect(() => {
    const fetchData = async () => {
      if (queryWord) {
        const decodeQueryWord = decodeURIComponent(queryWord);
        const data = await fetchSearchRecipes(decodeQueryWord);
        setSearchRecipeResults(data);
      } else {
        setSearchRecipeResults([]);
      }
    };
    fetchData();
  }, [queryWord]);

  // TODO: APIと連携するまでの仮実装
  const dummyData = [
    { id: 1, label: "レシピ" },
    { id: 2, label: "シェフ" },
  ];

  const handleTabChange = (id: number) => {
    console.log(params.target);
    console.log(queryWord);

    if (queryWord) {
      const decodeQueryWord = decodeURIComponent(queryWord);
      const encode = encodeURIComponent(encodeURIComponent(decodeQueryWord));
      const target = id === 1 ? "recipe" : "chef";
      router.push(`search/${target}?q=${encode}`);
      // } else {
      //   router.push(`search/${params.target}`);
    }
  };

  return (
    <div>
      <TabBar
        data={dummyData}
        initial={initial}
        handleTabChange={handleTabChange}
      />
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
      </div>
    </div>
  );
}
