"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconCart, IconHeart, IconSearch } from "../Icon";
import styles from "./Sidebar.module.scss";

export const Sidebar = () => {
  const pagePath = usePathname();

  return (
    <div className={styles.sidebar}>
      <div className={styles["sidebar-contents"]}>
        <h1>
          <Link href="/" className={styles["sidebar-title-link"]}>
            <Image
              src="/images/ichiryu-recipe-yoko-1.png"
              width={200}
              height={37}
              alt=""
            />
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
              <span className={styles["site-link-text"]}>一流レシピ</span>
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
