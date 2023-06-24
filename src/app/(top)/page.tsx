// import { ChefCard } from "@/components/ChefCard";

import styles from "./top.module.scss";

const dummyChefList = [
  {
    id: 3,
    name: "アンミカ",
    thumbnail: "/images/featured-chef1.png",
  },
  {
    id: 4,
    name: "ジュリア",
    thumbnail: "/images/featured-chef2.png",
  },
  {
    id: 5,
    name: "トム",
    thumbnail: "/images/featured-chef3.png",
  },
  {
    id: 6,
    name: "しまぶー",
    thumbnail: "/images/featured-chef4.png",
  },
];

export default function Page() {
  return (
    <div className={styles.wrap}>
      <section className={styles.section}>
        <h2 className={styles.title}>注目のシェフ</h2>
        <div className={styles["featured-chef"]}>
          {dummyChefList.map((chef, index) => (
            <div className={styles["chef-item"]} key={index}>
              {/* <ChefCard src={chef.thumbnail} name={chef.name} /> */}
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>話題のレシピ</h2>
        <div className={styles["topic-recipe"]}>
          {/* <RecipeCard favCountNumber={1234} name="ddddd" description="aaaa" /> */}
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.title}>シェフ</h2>
        <div className={styles["chef-list"]}></div>
      </section>
    </div>
  );
}
