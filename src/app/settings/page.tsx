import Link from "next/link";
import React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { IconArrow } from "@/components/Icon";
import { IconArrowBack } from "@/components/Icon/IconArrowBack";

import styles from "./settings.module.scss";

export const metadata = {
  title: "設定",
};

export default function Home() {
  return (
    <>
      <main className={styles.page}>
        <Header h1 position="left" icon={icon} href="/favorites">
          設定
        </Header>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h2 className={`${styles.h2} inner`}>利用規約や問い合わせ</h2>
            <div className={styles.textArea}>
              <ul>
                <li>
                  <Link className={styles.link} href="/kiyaku">
                    利用規約
                    <span className={styles["link-icon"]}>
                      <IconArrow color="#1a1523" />
                    </span>
                  </Link>
                </li>
                <li>
                  {/* TODO: ページデザイン無く未作成だが一応仮リンク設定 */}
                  <Link className={styles.link} href="/privacy">
                    プライバシーポリシー
                    <span className={styles["link-icon"]}>
                      <IconArrow color="#1a1523" />
                    </span>
                  </Link>
                </li>
                <li>
                  {/* TODO: しまぶーさんの方で決まり次第リンク設定 */}
                  <a className={styles.link} href="" target="_blank">
                    運営会社
                    <span className={styles["blank-icon"]}>{icon}</span>
                  </a>
                </li>
                <li>
                  {/* TODO: しまぶーさんの方で決まり次第リンク設定 */}
                  <a className={styles.link} href="" target="_blank">
                    お問い合わせ
                    <span className={styles["blank-icon"]}>{icon}</span>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.item}>
            <h2 className={`${styles.h2} inner`}>アカウントの操作</h2>
            <div className={styles.textArea}>
              <ul>
                <li>
                  <button
                    className={styles.link}
                    // TODO: ログアウト処理実装
                  >
                    ログアウト
                    <span className={styles["icon"]}>
                      {/* TODO: 後ほどコンポーネント化 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M9 12H21M21 12L18 9M21 12L18 15"
                          stroke="#1A1523"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
          <li className={styles.item}>
            <h2 className={`${styles.h2} inner`}>取り消しができない操作</h2>
            <div className={styles.textArea}>
              <ul>
                <li>
                  <button
                    className={styles.link}
                    // TODO: 退会処理実装
                  >
                    退会する
                    <span className={styles["icon"]}>
                      {/* TODO: 後ほどコンポーネント化 */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8V12M12 16H12.01M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
                          stroke="#1A1523"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}

const icon = <IconArrowBack color="#1A1523" />;
