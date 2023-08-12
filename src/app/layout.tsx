import "@/styles/globals.css";
import "@/styles/utility.scss";

import { Inter } from "next/font/google";

import { Side } from "@/components/Side";

import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className={styles.layout}>
          <Side />
          <div className={styles.page}>{children}</div>
        </div>
      </body>
    </html>
  );
}
