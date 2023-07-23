"use client";

import Link from "next/link";
import { useState } from "react";

import { CartsType } from "@/app/list/page";
import { CheckButton } from "@/components/CheckButton";
import {
  IconArrow,
  IconArrowDown,
  IconCheck,
  IconCook,
  IconDelete,
  IconDots,
  IconOthers,
  IconPlus,
} from "@/components/Icon";

import styles from "./ShoppingList.module.scss";

type Props = {
  data: CartsType;
};

export const ShoppingList = ({ data }: Props) => {
  const [isShow, setIsShow] = useState(false);
  const [isShowOthers, setIsShowOthers] = useState(false);

  return (
    <div>
      {data.lists.map((list) => (
        <div key={list.id} className={styles.wrapper}>
          {list.own_notes && (
            <div className={styles.parent}>
              <h2>{list.name}</h2>
              <div className={styles["button-area"]}>
                <button
                  type="button"
                  title="メモを追加する"
                  className={styles.button}
                  // TODO: メモ追加ロジックは後ほど実装する
                >
                  <IconPlus color="#6F6E77" />
                </button>
                <button
                  type="button"
                  title="その他選択"
                  className={styles["button-others"]}
                  onClick={() => setIsShowOthers((prev) => !prev)}
                >
                  <IconOthers color="#1A1523" />
                </button>
                {isShowOthers && (
                  <div className={styles["popup-others"]}>
                    <ul className={styles["popup-list"]}>
                      <li>
                        <button
                          type="button"
                          className={styles["popup-button-delete-item"]}
                        >
                          <span className={styles["popup-icon"]}>
                            <IconCheck color="#6F6E77" />
                          </span>
                          完了したアイテムだけ削除する
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className={styles["popup-button-delete-item"]}
                        >
                          <span className={styles["popup-icon"]}>
                            <IconDelete color="#6F6E77" />
                          </span>
                          すべてのアイテムを削除する
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
          {!list.own_notes && (
            <>
              <div className={styles.parent}>
                <h2>
                  <button type="button">{list.name}</button>
                </h2>
                <button
                  type="button"
                  title="ポップアップを開く"
                  className={styles.button}
                  onClick={() => setIsShow((prev) => !prev)}
                >
                  <IconDots color="#6F6E77" />
                </button>
              </div>
              {isShow && (
                // TODO: 各ボタン押下後の機能は後ほど実装する
                <div className={styles.popup}>
                  <ul className={styles["popup-list"]}>
                    <li>
                      <Link href="" className={styles["popup-button"]}>
                        <span className={styles["popup-icon"]}>
                          <IconCook color="#1A1523" />
                        </span>
                        レシピ詳細を見る
                      </Link>
                    </li>
                    <li>
                      <button type="button" className={styles["popup-button"]}>
                        <span className={styles["popup-icon"]}>
                          <IconArrow color="#1A1523" />
                        </span>
                        上に移動する
                      </button>
                    </li>
                    <li>
                      <button type="button" className={styles["popup-button"]}>
                        <span className={styles["popup-icon"]}>
                          <IconArrowDown color="#1A1523" />
                        </span>
                        下に移動する
                      </button>
                    </li>
                    <li>
                      <button type="button" className={styles["popup-button"]}>
                        <span className={styles["popup-icon"]}>
                          <IconPlus color="#1A1523" strokeWidth={1} />
                        </span>
                        買うものを追加する
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className={styles["popup-button-delete"]}
                      >
                        <span className={styles["popup-icon"]}>
                          <IconDelete color="#E54D2E" />
                        </span>
                        リストから削除する
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
          {list.materials.length > 0 && (
            <ul>
              {list.materials.map((material) => (
                <li className={styles["list-item"]} key={material.name}>
                  <CheckButton
                    label={material.name}
                    isOwnNotes={list.own_notes}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};
