import Link from "next/link";

import { IconDots, IconPlus } from "@/components/Icon";
import { ListTitle } from "@/components/ListTitle";

import styles from "./list.module.scss";

export const metadata = {
  title: "買い物リスト",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <ListTitle>買い物リスト</ListTitle>
      <div>
        <div className={styles.parent}>
          <h2>じぶんメモ</h2>
          <button
            type="button"
            title="メモを追加する"
            className={styles.button}
          >
            <IconPlus color="#6F6E77" />
          </button>
        </div>
        <ul>
          <li className={styles["list-item"]}>
            <input
              type="checkbox"
              id="mymemo01"
              className={styles["checkbox-input"]}
            />
            <label htmlFor="mymemo01" className={styles["checkbox-label"]}>
              <span className={styles["checkbox-icon"]}></span>
              <span>チーズ</span>
            </label>
          </li>
          <li className={styles["list-item"]}>マカロニ</li>
          <li className={styles["list-item"]}>バジル</li>
        </ul>
        <div className={styles.parent}>
          <h2>
            <Link href="">グラタン</Link>
          </h2>
          <button
            type="button"
            title="ポップアップを開く"
            className={styles.button}
          >
            <IconDots color="#6F6E77" />
          </button>
        </div>
      </div>
    </main>
  );
}
