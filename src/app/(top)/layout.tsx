"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { SearchInput } from "@/components/SearchInput";

import styles from "./layout.module.scss";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main>
      <div className={styles["search-section"]}>
        <SearchInput path={pathname} />
      </div>
      <div>{children}</div>
    </main>
  );
}
