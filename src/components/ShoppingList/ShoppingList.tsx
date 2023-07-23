"use client";

import Link from "next/link";

import { CartsListType, CartsType } from "@/app/list/page";
import { CheckButton } from "@/components/CheckButton";
import {
  IconArrow,
  IconArrowDown,
  IconCheck,
  IconCook,
  IconDelete,
  IconOthers,
  IconPlus,
} from "@/components/Icon";
import { usePopupWithOutsideClick } from "@/hooks/usePopupWithOutsideClick";

import styles from "./ShoppingList.module.scss";

type Props = {
  data: CartsType;
};

export const ShoppingList = ({ data }: Props) => {
  return (
    <div>
      {data.lists.map((list) => (
        <List key={list.id} list={list} listLength={data.lists.length} />
      ))}
    </div>
  );
};

type ListProps = {
  list: CartsListType;
  listLength: number;
};

const List = ({ list, listLength }: ListProps) => {
  return (
    <div key={list.id} className={styles.wrapper}>
      <ListTitle list={list} isLastItem={list.position === listLength} />
      {list.materials.length > 0 && (
        <ul>
          {list.materials.map((material) => (
            <li className={styles["list-item"]} key={material.position}>
              <CheckButton
                name={material.name}
                position={material.position}
                isChecked={material.is_checked}
                isLastItem={material.position === list.materials.length}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

type ListTitleProps = {
  list: CartsListType;
  isLastItem: boolean;
};

const ListTitle = ({ list, isLastItem }: ListTitleProps) => {
  const { popupRef, isShow, setIsShow } = usePopupWithOutsideClick();

  return (
    <div className={styles.parent}>
      <h2 className={styles.title}>
        {list.own_notes ? (
          list.name
        ) : (
          // TODO: レシピ詳細のリンクを設定する
          <Link href={`${list.id}`}>{list.name}</Link>
        )}
      </h2>
      <div className={styles["button-area"]}>
        <button
          type="button"
          title="メモを追加する"
          className={styles["button-icon"]}
          // TODO: メモ追加ロジックは後ほど実装する
        >
          <IconPlus color="#6F6E77" />
        </button>
        <button
          type="button"
          title="ポップアップメニューを開く"
          className={styles["button-icon"]}
          onClick={() => setIsShow((prev) => !prev)}
        >
          <IconOthers color="#1A1523" />
        </button>
        {isShow && (
          <div className={styles.popup} ref={popupRef}>
            {!list.own_notes && (
              <ul className={styles["popup-list"]}>
                <li>
                  <button type="button" className={styles["popup-button"]}>
                    <span className={styles["popup-icon"]}>
                      <IconCook color="#6F6E77" />
                    </span>
                    レシピ詳細をみる
                  </button>
                </li>
                {list.position > 2 && (
                  <li>
                    <button type="button" className={styles["popup-button"]}>
                      <span className={styles["popup-icon"]}>
                        <IconArrow color="#6F6E77" />
                      </span>
                      上に移動する
                    </button>
                  </li>
                )}
                {!isLastItem && (
                  <li>
                    <button type="button" className={styles["popup-button"]}>
                      <span className={styles["popup-icon"]}>
                        <IconArrowDown color="#6F6E77" />
                      </span>
                      下に移動する
                    </button>
                  </li>
                )}
              </ul>
            )}
            <ul className={styles["popup-list"]}>
              <li>
                <button type="button" className={styles["popup-button"]}>
                  <span className={styles["popup-icon"]}>
                    <IconCheck color="#6F6E77" />
                  </span>
                  完了したアイテムだけ削除する
                </button>
              </li>
              <li>
                <button type="button" className={styles["popup-button"]}>
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
  );
};
