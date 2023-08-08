"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { IconClose } from "@/components/Icon";

import styles from "./my-recipe-new.module.scss";

// export const metadata = {
//   title: "マイレシピ新規作成",
// };

export default function Home() {
  const [peopleCount, setPeopleCount] = useState(1);
  return (
    <main className={styles.page}>
      {/* head */}
      <div className={styles.head}>
        <button
          className={styles["close-button"]}
          title="保存もしくは削除するか確認する"
          onClick={() => {
            alert("保存か破棄かを選択できる確認モーダルを表示させる（未実装）");
          }}
        >
          <IconClose color={"#1A1523"} />
        </button>
        <Link
          href="" // TODO: 下書き一覧ページに遷移させる
          className={styles["list-button"]}
        >
          下書き一覧
        </Link>
      </div>
      {/* body */}
      <div className={styles.list}>
        <div className={styles["list-title"]}>レシピ名</div>
        <input
          className={styles["input-text"]}
          placeholder="例：肉じゃが"
          type="text"
        />
        <div className={styles["list-title"]}>
          <span>材料 / {peopleCount}人前</span>
          <div className={styles["count-list"]}>
            <button
              className={styles["count-button"]}
              onClick={() => setPeopleCount((prev) => prev - 1)}
            >
              <Image
                src="/icon/tabler-icon-minus.svg"
                width={16}
                height={16}
                alt=""
              />
            </button>
            <button
              className={styles["count-button"]}
              onClick={() => setPeopleCount((prev) => prev + 1)}
            >
              <Image
                src="/icon/tabler-icon-plus.svg"
                width={16}
                height={16}
                alt=""
              />
            </button>
          </div>
        </div>
        <input
          className={styles["input-text"]}
          placeholder="例：肉じゃが"
          type="text"
        />
      </div>
    </main>
  );
}
