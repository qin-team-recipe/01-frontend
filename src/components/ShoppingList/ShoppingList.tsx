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
      <ListTitle
        id={list.id}
        name={list.name}
        ownNotes={list.own_notes}
        isFirstItem={list.position === 1}
        isLastItem={list.position === listLength}
      />
      {list.materials.length > 0 && (
        <ul>
          {list.materials.map((material) => (
            <li className={styles["list-item"]} key={material.position}>
              <CheckButton
                name={material.name}
                isChecked={material.is_checked}
                isFirstItem={material.position === 1}
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
  id: number;
  name: string;
  ownNotes: boolean;
  isFirstItem: boolean;
  isLastItem: boolean;
};

const ListTitle = ({
  name,
  id,
  ownNotes,
  isFirstItem,
  isLastItem,
}: ListTitleProps) => {
  const { popupRef, isShow, setIsShow } = usePopupWithOutsideClick();

  return (
    <div className={styles.title}>
      <h2 className={styles["title-text"]}>
        {ownNotes ? (
          name
        ) : (
          <Link
            href={`${id}`} //TODO: レシピ詳細のリンクを設定する
          >
            {name}
          </Link>
        )}
      </h2>
      {/* TODO: 各ボタン押下後のロジックを実装する */}
      <div className={styles["title-sub"]}>
        <button
          type="button"
          title="材料を追加する"
          className={styles["title-button"]}
          onClick={() => alert("材料を追加する（未実装）")}
        >
          <IconPlus color="#6F6E77" />
        </button>
        <button
          type="button"
          title="ポップアップメニューを開く"
          className={styles["title-button"]}
          onClick={() => setIsShow((prev) => !prev)}
        >
          <IconOthers color="#1A1523" />
        </button>
        {isShow && (
          <div className={styles.popup} ref={popupRef}>
            {!ownNotes && (
              <ul className={styles["popup-list"]}>
                <li>
                  <Link
                    href={`${id}`} //TODO: レシピ詳細のリンクを設定する
                    className={styles["popup-button"]}
                  >
                    <span className={styles["popup-icon"]}>
                      <IconCook color="#6F6E77" />
                    </span>
                    レシピ詳細をみる
                  </Link>
                </li>
                {!isFirstItem && (
                  <li>
                    <button
                      type="button"
                      className={styles["popup-button"]}
                      onClick={() => alert("上に移動する（未実装）")}
                    >
                      <span className={styles["popup-icon"]}>
                        <IconArrow color="#6F6E77" />
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
                <button
                  type="button"
                  className={styles["popup-button"]}
                  onClick={() =>
                    alert("完了したアイテムだけ削除する（未実装）")
                  }
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
                  className={styles["popup-button"]}
                  onClick={() => alert("すべてのアイテムを削除する（未実装）")}
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
  );
};
