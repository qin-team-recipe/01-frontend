import Image from "next/image";
import Link from "next/link";

import { ChefCard } from "@/components/ChefCard";
import { RecipeCard } from "@/components/RecipeCard";
import { SearchInput } from "@/components/SearchInput";

import { Chef } from "../api/chefs/types";
import { Recipe } from "../api/recipes/types";
import { TrendingChefs } from "../api/trending_chefs/types";
import styles from "./top.module.scss";

export const metadata = {
  title: "トップ",
};

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

// シェフ一覧
const getChefs = async () => {
  const response = await fetch("http://localhost:3000/api/chefs");
  const chefs: Chef[] = await response.json();
  return chefs;
};

export default async function Page() {
  const trendingChefs = await getTrendingChefs();
  const recipes = await getRecipes();
  const chefs = await getChefs();

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
              <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
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
            {chefs.map((chef) => (
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
