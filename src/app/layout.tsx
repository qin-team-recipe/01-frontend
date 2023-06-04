"use client"; // TODO: usePathnameを利用するために設定しているが、該当箇所以外はServer側で生成されるように調整したい

import "@/styles/globals.scss";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pagePath = usePathname();

  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className={styles.layout}>
          <div className={styles["layout-inner"]}>
            <div className={styles["layout-side"]}>
              <h1>
                <Link href="/" className={styles["site-title"]}>
                  <Image src="/icon/chef.svg" width={32} height={32} alt="" />
                  Top Chefs
                </Link>
              </h1>
              <ul className={styles["site-list"]}>
                <li>
                  <Link
                    href="/"
                    className={
                      pagePath === "/"
                        ? styles["site-link-active"]
                        : styles["site-link"]
                    }
                  >
                    <Image
                      src={
                        // TODO: SVGをReactコンポーネントとして利用してpropsで色変更できるようにしたい
                        pagePath === "/"
                          ? "/icon/search-active.svg"
                          : "/icon/search.svg"
                      }
                      width={26}
                      height={26}
                      alt=""
                    />
                    話題を検索
                  </Link>
                </li>
                <li>
                  <Link
                    href="/favorites"
                    className={
                      pagePath === "/favorites"
                        ? styles["site-link-active"]
                        : styles["site-link"]
                    }
                  >
                    <Image
                      src={
                        pagePath === "/favorites"
                          ? "/icon/heart-active.svg"
                          : "/icon/heart.svg"
                      }
                      width={26}
                      height={26}
                      alt=""
                    />
                    お気に入り
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shopping-lists"
                    className={
                      pagePath === "/shopping-lists"
                        ? styles["site-link-active"]
                        : styles["site-link"]
                    }
                  >
                    <Image
                      src={
                        pagePath === "/shopping-lists"
                          ? "/icon/cart-active.svg"
                          : "/icon/cart.svg"
                      }
                      width={26}
                      height={26}
                      alt=""
                    />
                    買い物リスト
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles["layout-page"]}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
