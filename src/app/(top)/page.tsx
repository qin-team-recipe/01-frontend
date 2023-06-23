import Image from "next/image";

import styles from "./top.module.scss";

const dummyChefList = [
  { name: "山田シェフ1" },
  { name: "山田シェフ2" },
  { name: "山田シェフ3" },
];

export default function Page() {
  return (
    <div className={styles.wrap}>
      <section className={styles.section}>
        <h2 className={styles.title}>注目のシェフ</h2>
        <div className={styles["featured-chef"]}>
          {dummyChefList.map((chef, index) => (
            <div className={styles["chef-item"]} key={index}>
              <div className={styles["chef-image"]}>
                <Image
                  src={"/images/chef-dummy.png"}
                  width={160}
                  height={208}
                  alt=""
                />
              </div>
              <p className={styles["chef-name"]}>{chef.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>話題のレシピ</h2>
        <div className={styles["topic-recipe"]}></div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>シェフ</h2>
        <div className={styles["chef-list"]}></div>
      </section>
    </div>
  );
}
