"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconCart, IconHeart, IconSearch } from "../Icon";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const pagePath = usePathname();

  return (
    <footer className={styles.footer}>
      <ul className={styles["site-list"]}>
        <li className={styles["site-list-item"]}>
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
            <span className={styles["site-link-text"]}>検索</span>
          </Link>
        </li>
        <li className={styles["site-list-item"]}>
          <Link
            href="/favorites"
            className={
              pagePath === "/favorites" || pagePath === "/settings"
                ? styles["site-link-active"]
                : styles["site-link"]
            }
          >
            <span className={styles["site-link-icon"]}>
              <IconHeart
                color={
                  pagePath === "/favorites" || pagePath === "/settings"
                    ? "#CA3214"
                    : "#6F6E77"
                }
              />
            </span>
            <span className={styles["site-link-text"]}>お気に入り</span>
          </Link>
        </li>
        <li className={styles["site-list-item"]}>
          <Link
            href="/list"
            className={
              pagePath === "/list"
                ? styles["site-link-active"]
                : styles["site-link"]
            }
          >
            <span className={styles["site-link-icon"]}>
              <IconCart color={pagePath === "/list" ? "#CA3214" : "#6F6E77"} />
            </span>
            <span className={styles["site-link-text"]}>お買い物</span>
          </Link>
        </li>
      </ul>
    </footer>
  );
};
