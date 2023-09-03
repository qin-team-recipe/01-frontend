import Link from "next/link";

import { ChefCircleImage } from "@/components/ChefCircleImage";
import { IconTablerMenu } from "@/components/Icon";
import { IconAvatar } from "@/components/Icon/IconAvatar";
import { RecipeCard } from "@/components/RecipeCard";

import { FavoriteChef, FavoriteNewRecipe } from "../api/types";
import styles from "./favorites.module.scss";

// シェフ一覧
const getFavoriteChefs = async (userId: number) => {
  const response = await fetch(
    `${process.env.API_FRONT_URL}/api/users/${userId}/favorite_chefs`
  );
  const favoriteChefs: FavoriteChef[] = await response.json();
  return favoriteChefs;
};

// 新着レシピ（お気に入りページのお気に入りシェフの新着レシピ）
const getFavoriteNewRecipes = async (userId: number) => {
  const response = await fetch(
    `${process.env.API_FRONT_URL}/api/users/${userId}/favorite_new_recipes`
  );
  const favoriteChefs: FavoriteNewRecipe[] = await response.json();
  return favoriteChefs;
};

export default async function Page() {
  // TODO: dummy data
  const dummyUserId = 10;
  const favoriteChefs = await getFavoriteChefs(dummyUserId);
  const favoriteNewRecipes = await getFavoriteNewRecipes(dummyUserId);

  return (
    <main>
      <div className={styles.header}>
        <Link href={"settings"}>
          <IconTablerMenu color="#1A1523" />
        </Link>
        <div className={`${styles["text-favorite"]} ${styles["title"]}`}>
          お気に入り
        </div>
        <Link href={"my-page"}>
          <IconAvatar color="#1A1523" />
        </Link>
      </div>
      <div className={styles.contents}>
        <div>
          <div className={styles["sub-title"]}>シェフ</div>
          <div className={styles["favorite-chefs"]}>
            {favoriteChefs.map((chef) => (
              <div key={chef.chef_id}>
                <ChefCircleImage
                  id={chef.chef_id}
                  thumbnail={chef.thumbnail}
                  name={chef.name}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <div className={styles["title-bar"]}>
              <h2 className={styles["sub-title"]}>新着レシピ</h2>
              <Link href={"/new-recipes"} className={styles.more}>
                もっと見る
              </Link>
            </div>
            <div className={styles["new-recipe"]}>
              {favoriteNewRecipes.map((recipe) => (
                <Link href={`/recipe/${recipe.id}`} key={recipe.id}>
                  <RecipeCard
                    favoriteCount={recipe.favorite_count}
                    name={recipe.name}
                    description={recipe.description}
                    thumbnail={recipe.thumbnail}
                    isTop
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>Favorites</div>
      </div>
    </main>
  );
}
