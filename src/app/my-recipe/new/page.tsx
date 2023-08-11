import Link from "next/link";
import React from "react";

import { IconClose } from "@/components/Icon";
import { RecipeEdit } from "@/components/RecipeEdit";

import styles from "./my-recipe-new.module.scss";

export const metadata = {
  title: "マイレシピ新規作成",
};

export default function Home() {
  return (
    <main className={styles.page}>
      {/* TODO: headerコンポーネントに差し替える */}
      <div className={styles.head}>
        <button
          // TODO: 保存か破棄かを選択できる確認モーダルを表示させる（未実装）
          className={styles["close-button"]}
          title="保存もしくは削除するか確認する"
        >
          <IconClose color={"#1A1523"} />
        </button>
        <Link href="/my-recipe/drafts" className={styles["list-button"]}>
          下書き一覧
        </Link>
      </div>
      <RecipeEdit type="new" />
    </main>
  );
}
