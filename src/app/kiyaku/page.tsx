import React from "react";

import { ContentsInner } from "@/components/ContentsInner/ContentsInner";
import { Header } from "@/components/Header";
import { IconArrowBack } from "@/components/Icon/IconArrowBack";

import styles from "./kiyaku.module.scss";

export const metadata = {
  title: "利用規約",
};

export default function Home() {
  const icon = <IconArrowBack color="#1A1523" />;
  return (
    <main className={styles.page}>
      <Header h1 position="left" icon={icon} href="/settings">
        利用規約
      </Header>
      <div className={styles.listArea}>
        <ContentsInner>
          <ul>
            <li className={styles.item}>
              <h2 className={styles.h2}>第一項</h2>
              <div className={styles.textArea}>
                <p className={styles.text}>
                  吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
                </p>
                <p className={styles.text}>
                  吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <h2 className={styles.h2}>第二項</h2>
              <div className={styles.textArea}>
                <p className={styles.text}>
                  吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
                </p>
                <p className={styles.text}>
                  吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
                </p>
              </div>
            </li>
          </ul>
        </ContentsInner>
      </div>
    </main>
  );
}
