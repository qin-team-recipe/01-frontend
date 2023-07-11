import Image from "next/image";
import Link from "next/link";

import { ChefCard } from "@/components/ChefCard";
import { RecipeCard } from "@/components/RecipeCard";

import styles from "./top.module.scss";

const chefList = [
  {
    id: 3,
    name: "アンミカ",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    recipe_count: 123,
    thumbnail: "/images/featured-chef1.png",
  },
  {
    id: 4,
    name: "ジュリア",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    recipe_count: 1234,
    thumbnail: "/images/featured-chef2.png",
  },
  {
    id: 5,
    name: "トム",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    recipe_count: 1234,
    thumbnail: "/images/featured-chef3.png",
  },
  {
    id: 6,
    name: "しまぶー",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    recipe_count: 1234,
    thumbnail: "/images/featured-chef4.png",
  },
];

const recipeList = [
  {
    id: 3,
    name: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    favCountNumber: 1234,
  },
  {
    id: 4,
    name: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "マイレシピ",
    favCountNumber: 0,
  },
  {
    id: 5,
    name: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    favCountNumber: 1234,
  },
  {
    id: 6,
    name: "トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン",
    description: "ウルトラハイパー超すごいしまぶーシェフ",
    favCountNumber: 1234,
  },
];

export default function Page() {
  return (
    <div className={styles.wrap}>
      <section className={styles.section}>
        <h2 className={styles.title}>注目のシェフ</h2>
        <div className={styles["featured-chef"]}>
          {chefList.map((chef) => (
            <Link href={`/chef/${chef.id}`} key={chef.id}>
              <div className={styles["chef-image"]}>
                <Image src={chef.thumbnail} fill sizes="100%" alt="" />
                <p className={styles["chef-name"]}>{chef.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles["title-bar"]}>
          <h2 className={styles.title}>話題のレシピ</h2>
          <Link href={"/search/recipe"} className={styles.more}>
            もっと見る
          </Link>
        </div>
        <div className={styles["topic-recipe"]}>
          {recipeList.map((recipe) => (
            <Link href="" key={recipe.id}>
              <RecipeCard
                favCountNumber={recipe.favCountNumber}
                name={recipe.name}
                description={recipe.description}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles["title-bar"]}>
          <h2 className={styles.title}>シェフ</h2>
          <Link href={"/search/chef"} className={styles.more}>
            もっと見る
          </Link>
        </div>
        <div className={styles["chef-list"]}>
          {chefList.map((chef) => (
            <Link href={`/chef/${chef.id}`} key={chef.id}>
              <ChefCard
                src={chef.thumbnail}
                name={chef.name}
                description={chef.description}
                count={chef.recipe_count}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
