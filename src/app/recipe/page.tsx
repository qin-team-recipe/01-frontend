import Image from "next/image";
import React from "react";

import styles from "./recipe.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        src="/images/recipe-dummy.png"
        alt=""
        width={390}
        height={390}
        className={styles.img}
      />
      <section className={styles.detailSection}>
        <h1 className={styles.title}>グラタン</h1>
        <p className={styles.description}>
          初の絵本出版！ 『 まねっこシェフ』 ・ふわふわ！スクランブルエッグ
          ・にぎにぎ！おにぎり 主婦の友社より３月３日、２冊同時発売！
          絶賛発売中！
        </p>

        <div className={styles.container}>
          <div className={styles.item}>
            <strong>123</strong> レシピ
          </div>
          <div>
            <strong>456</strong> フォロワー
          </div>
        </div>

        <Image src="/icon/follow-button.svg" width={108} height={25} alt="" />
      </section>
    </main>
  );
}
