"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconCart, IconHeart, IconSearch } from "../Icon";
import styles from "./Side.module.scss";

export const Side = () => {
  const pagePath = usePathname();

  return (
    <div className={styles["layout-side"]}>
      <div className={styles["layout-side-main"]}>
        <h1>
          <Link href="/" className={styles["layout-side-title-link"]}>
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
              <span className={styles["site-link-icon"]}>
                <IconSearch color={pagePath === "/" ? "#CA3214" : "#6F6E77"} />
              </span>
              <span className={styles["site-link-text"]}>話題を検索</span>
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
              <span className={styles["site-link-icon"]}>
                <IconHeart
                  color={pagePath === "/favorites" ? "#CA3214" : "#6F6E77"}
                />
              </span>
              <span className={styles["site-link-text"]}>お気に入り</span>
            </Link>
          </li>
          <li>
            <Link
              href="/list"
              className={
                pagePath === "/list"
                  ? styles["site-link-active"]
                  : styles["site-link"]
              }
            >
              <span className={styles["site-link-icon"]}>
                <IconCart
                  color={pagePath === "/list" ? "#CA3214" : "#6F6E77"}
                />
              </span>
              <span className={styles["site-link-text"]}>買い物リスト</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
