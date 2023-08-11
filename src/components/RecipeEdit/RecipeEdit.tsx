"use client";

import React, { useState } from "react";

import { IconMinusBox, IconPlus, IconPlusBox } from "@/components/Icon";

import styles from "./RecipeEdit.module.scss";

type RecipeEditProps = {
  type: "new" | "edit";
};

export const RecipeEdit = ({ type }: RecipeEditProps) => {
  const [peopleCount, setPeopleCount] = useState(1);

  return (
    <div className={styles["recipe-edit"]}>
      <div className={styles["title"]}>レシピ名</div>
      <input
        className={styles["input"]}
        placeholder="例：肉じゃが"
        type="text"
      />
      <div className={styles["title"]}>
        <span>材料 / {peopleCount}人前</span>
        <div className={styles["count-area"]}>
          <button
            title="人数を1人減らす"
            disabled={peopleCount === 1}
            className={styles["count-button"]}
            onClick={() => setPeopleCount((prev) => prev - 1)}
          >
            <IconMinusBox />
          </button>
          <button
            title="人数を1人増やす"
            className={styles["count-button"]}
            onClick={() => setPeopleCount((prev) => prev + 1)}
          >
            <IconPlusBox />
          </button>
        </div>
      </div>
      <input
        className={styles["input"]}
        placeholder="例：じゃがいも"
        type="text"
      />
      <div className="inner">
        <button
          type="button"
          className={styles["button-plus"]}
          onClick={() =>
            alert("TODO: 材料を追加するボタンを押下したときの処理")
          }
        >
          <span className={styles["button-plus-icon"]}>
            <IconPlus color="#E54D2E" />
          </span>
          材料を追加する
        </button>
      </div>
      <div className={styles["title"]}>作り方</div>
      <div className={styles["how-area"]}>
        {/* TODO:リスト順に設定する */}
        <span className={styles["icon-number"]}>1</span>
        <input
          className={styles["input-how"]}
          placeholder="工程をご記入ください"
          type="text"
        />
      </div>
      <div className="inner">
        <button
          type="button"
          className={styles["button-plus"]}
          onClick={() =>
            alert("TODO: 工程を追加するボタンを押下したときの処理")
          }
        >
          <span className={styles["button-plus-icon"]}>
            <IconPlus color="#E54D2E" />
          </span>
          工程を追加する
        </button>
      </div>
      <div className={styles["title"]}>画像（任意）</div>
      <div className="inner">
        <input type="file" className={styles["input-file"]} />
        {/* TODO: 下記ボタンを押下すると画像登録できるように調整 */}
        <button type="button" className={styles["button-file"]}>
          画像を設定
          <span className={styles["button-file-icon"]}>
            <IconPlus color="#6f6e77" />
          </span>
        </button>
      </div>
      <div className={styles["title"]}>レシピの紹介文（任意）</div>
      <textarea className={styles.textarea} />
      <div className={styles["title"]}>リンク（任意）</div>
      <input className={styles["input"]} type="text" />
      <div className="inner">
        <button type="button" className={styles["button-plus"]}>
          <span className={styles["button-plus-icon"]}>
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
