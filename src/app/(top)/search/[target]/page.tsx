"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./search-target.module.scss";

export default function Page({ params }: { params: { target: string } }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryWord = searchParams.get("q");
  const path = usePathname();
  const isRecipe = path.startsWith("/search/recipe");
  let searchTitle = "";
  if (queryWord) {
    const decode = decodeURIComponent(queryWord);
    searchTitle = `「${decode}」で検索`;
  } else {
    searchTitle = isRecipe ? "話題のレシピ" : "シェフ一覧";
  }
  return <div className={styles["result-title"]}>{searchTitle}</div>;
}
