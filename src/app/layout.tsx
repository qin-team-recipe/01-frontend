import "@/styles/globals.css";

import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/Footer";

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
          <div className={styles["layout-side"]}>
            <div className={styles["layout-side-main"]}>
              <h1 className={styles["layout-side-title"]}>
                <Link href="/" className={styles["layout-side-title-link"]}>
                  <Image src="/icon/chef.svg" width={32} height={32} alt="" />
                  Top Chefs
                </Link>
              </h1>
              <Footer />
            </div>
          </div>
          <div className={styles["layout-page"]}>{children}</div>
        </div>
      </body>
    </html>
  );
}
