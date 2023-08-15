import React from "react";

import { Footer } from "@/components/Footer";

import styles from "./layout.module.scss";

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
