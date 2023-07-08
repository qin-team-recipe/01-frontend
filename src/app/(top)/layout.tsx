"use client";

import React from "react";

import { SearchInput } from "@/components/SearchInput";

import styles from "./layout.module.scss";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={styles["search-section"]}>
        <SearchInput />
      </div>
      <div>{children}</div>
    </main>
  );
}
