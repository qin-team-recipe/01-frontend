"use client";

import { useId } from "react";

import { usePopupWithOutsideClick } from "@/hooks/usePopupWithOutsideClick";

import { IconArrow, IconArrowDown, IconDelete, IconDots } from "../Icon";
import styles from "./CheckButton.module.scss";

type Props = {
  name: string;
  position: number;
  isChecked?: boolean;
  isLastItem: boolean;
};

export const CheckButton = ({
  name,
  position,
  isChecked,
  isLastItem,
}: Props) => {
  const id = useId();
  const { popupRef, isShow, setIsShow } = usePopupWithOutsideClick();

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        {/* TODO: チェック状態をもとに処理するロジックを実装する */}
        <input
          type="checkbox"
          id={id}
          className={styles["checkbox-input"]}
          defaultChecked={isChecked}
        />
        <label htmlFor={id} className={styles["checkbox-label"]}>
          <span className={styles["checkbox-icon"]}></span>
          <span>{name}</span>
        </label>
      </div>
      <button
        type="button"
        title="ポップアップメニューを開く"
        onClick={() => setIsShow((prev) => !prev)}
      >
        <IconDots color="#6F6E77" />
      </button>
      {isShow && (
        <div className={styles.popup} ref={popupRef}>
          {/* TODO: 各ボタン押下後のロジックを実装する */}
          <ul className={styles["popup-list"]}>
            {position > 1 && (
              <li>
                <button
                  type="button"
                  className={styles["popup-button"]}
                  onClick={() => alert("上に移動する（未実装）")}
                >
                  <span className={styles["popup-icon"]}>
                    <IconArrow color="#1A1523" />
                  </span>
                  上に移動する
                </button>
              </li>
            )}
            {!isLastItem && (
              <li>
                <button
                  type="button"
                  className={styles["popup-button"]}
                  onClick={() => alert("下に移動する（未実装）")}
                >
                  <span className={styles["popup-icon"]}>
                    <IconArrowDown color="#1A1523" />
                  </span>
                  下に移動する
                </button>
              </li>
            )}
          </ul>
          <ul className={styles["popup-list"]}>
            <li>
              <button
                type="button"
                className={styles["popup-button"]}
                onClick={() => alert("アイテムを削除する（未実装）")}
              >
                <span className={styles["popup-icon"]}>
                  <IconDelete color="#6F6E77" />
                </span>
                アイテムを削除する
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
