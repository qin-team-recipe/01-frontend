import React from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import styles from "./layout.module.scss";

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.main}>
        <Header h1>買い物リスト</Header>
        {children}
      </main>
      <Footer />
    </>
  );
}
