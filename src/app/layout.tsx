import "@/styles/globals.css";
import "@/styles/utility.scss";

import { Inter } from "next/font/google";

import { Sidebar } from "@/components/Sidebar/Sidebar";

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
          <div className={styles.side}>
            <div className={styles["side-inner"]}>
              <Sidebar />
            </div>
          </div>
          <div className={styles.page}>{children}</div>
        </div>
      </body>
    </html>
  );
}
