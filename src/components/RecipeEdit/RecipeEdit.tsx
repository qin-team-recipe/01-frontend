"use client";

import Image from "next/image";
import React, { useState } from "react";

import { IconPlus } from "@/components/Icon";

import styles from "./RecipeEdit.module.scss";

type RecipeEditProps = {
  type: "new" | "edit";
};

export const RecipeEdit = ({ type }: RecipeEditProps) => {
  const [peopleCount, setPeopleCount] = useState(1);

  return (
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
            disabled={peopleCount === 1}
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
        placeholder="例：じゃがいも"
        type="text"
      />
      <div className="inner">
        <button
          type="button"
          className={styles["plus-button"]}
          onClick={() =>
            alert("TODO: 材料を追加するボタンを押下したときの処理")
          }
        >
          <span className={styles["plus-button-icon"]}>
            <IconPlus color="#E54D2E" />
          </span>
          材料を追加する
        </button>
      </div>
      <div className={styles["list-title"]}>作り方</div>
      <div className={styles["list-how"]}>
        {/* TODO:リスト順に設定する */}
        <span className={styles["number-icon"]}>1</span>
        <input
          className={styles["input-how"]}
          placeholder="工程をご記入ください"
          type="text"
        />
      </div>
      <div className="inner">
        <button
          type="button"
          className={styles["plus-button"]}
          onClick={() =>
            alert("TODO: 工程を追加するボタンを押下したときの処理")
          }
        >
          <span className={styles["plus-button-icon"]}>
            <IconPlus color="#E54D2E" />
          </span>
          工程を追加する
        </button>
      </div>
      <div className={styles["list-title"]}>画像（任意）</div>
      <div className="inner">
        <input type="file" className={styles["input-file"]} />
        {/* TODO: 下記ボタンを押下すると画像登録できるように調整 */}
        <button type="button" className={styles["file-button"]}>
          画像を設定
          <span className={styles["file-button-icon"]}>
            <IconPlus color="#6f6e77" />
          </span>
        </button>
      </div>
      <div className={styles["list-title"]}>レシピの紹介文（任意）</div>
      <textarea className={styles.textarea} />
      <div className={styles["list-title"]}>リンク（任意）</div>
      <input className={styles["input-text"]} type="text" />
      <div className="inner">
        <button type="button" className={styles["plus-button"]}>
          <span className={styles["plus-button-icon"]}>
            <IconPlus color="#E54D2E" />
          </span>
          リンクを追加する
        </button>
      </div>
      {/* TODO: 保存・削除ボタンを押下したときの処理 */}
      <div className={styles["button-area"]}>
        <button type="button" className={styles.button}>
          保存する
        </button>
        {type === "edit" && (
          <button type="button" className={styles["button-delete"]}>
            削除する
          </button>
        )}
      </div>
    </div>
  );
};
