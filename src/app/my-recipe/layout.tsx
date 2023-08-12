import Link from "next/link";
import React from "react";

import { Footer } from "@/components/Footer";
import { IconClose } from "@/components/Icon";

import styles from "./layout.module.scss";

export default function MyRecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.main}>
        {/* TODO: headerコンポーネントに差し替える（要調整？） */}
        <div className={styles.head}>
          <button
            // TODO: 保存か破棄かを選択できる確認モーダルを表示させる（未実装）
            className={styles.close}
            title="保存もしくは削除するか確認する"
          >
            <IconClose color={"#1A1523"} />
          </button>
          <Link href="/my-recipe/drafts" className={styles.link}>
            下書き一覧
          </Link>
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
