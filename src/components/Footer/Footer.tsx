"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Footer.module.scss";

export const Footer = () => {
  const pagePath = usePathname();

  return (
    <ul className={styles["site-list"]}>
      <li>
        <Link
          href="/"
          className={
            pagePath === "/" ? styles["site-link-active"] : styles["site-link"]
          }
        >
          <Image
            src={
              // TODO: SVGをReactコンポーネントとして利用してpropsで色変更できるようにしたい
              pagePath === "/" ? "/icon/search-active.svg" : "/icon/search.svg"
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
  );
};
