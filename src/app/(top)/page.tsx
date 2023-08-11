import Image from "next/image";
import Link from "next/link";

import { ChefCard } from "@/components/ChefCard";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchInput } from "@/components/SearchInput";

import { Recipe } from "../api/recipes/types";
import { TrendingChefs } from "../api/trending_chefs/types";
import styles from "./top.module.scss";

export const metadata = {
  title: "トップ",
};

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

// 注目のシェフ
const getTrendingChefs = async () => {
  const response = await fetch("http://localhost:3000/api/trending_chefs");
  const trendingChefs: TrendingChefs[] = await response.json();
  return trendingChefs;
};

// 話題のレシピ一覧
const getRecipes = async () => {
  const response = await fetch("http://localhost:3000/api/recipes");
  const recipes: Recipe[] = await response.json();
  return recipes;
};

export default async function Page() {
  const trendingChefs = await getTrendingChefs();
  const recipes = await getRecipes();

  return (
    <>
      <div className={styles["search-section"]}>
        <SearchInput />
      </div>
      <div className={styles.wrap}>
        <section className={styles.section}>
          <h2 className={styles.title}>注目のシェフ</h2>
          <div className={styles["featured-chef"]}>
            {trendingChefs.map((chef) => (
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
            {recipes.map((recipe) => (
              <Link href="" key={recipe.id}>
                <RecipeCard
                  favCountNumber={recipe.favorite_count}
                  name={recipe.name}
                  description={recipe.description}
                  isTop
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
    </>
  );
}
