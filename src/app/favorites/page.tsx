import Link from "next/link";

import { ChefCircleImage } from "@/components/ChefCircleImage";
import { IconTablerMenu } from "@/components/Icon";
import { IconAvatar } from "@/components/Icon/IconAvatar";

import { FavoriteChef } from "../api/types";
import styles from "./favorites.module.scss";

// シェフ一覧
const getFavoriteChefs = async (id: number) => {
  const response = await fetch(
    `${process.env.API_FRONT_URL}/api/users/${id}/favorite_chefs`
  );
  const favoriteChefs: FavoriteChef[] = await response.json();
  return favoriteChefs;
};

export default async function Page() {
  // TODO: dummy data
  const dummyUserId = 10;
  const favoriteChefs = await getFavoriteChefs(dummyUserId);

  return (
    <main>
      <div className={styles.header}>
        <Link href={"settings"}>
          <IconTablerMenu color="#1A1523" />
        </Link>
        <span className={`${styles["text-favorite"]} ${styles["title-text"]}`}>
          お気に入り
        </span>
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
        <div>New-recipes</div>
        <div>Favorites</div>
      </div>
    </main>
  );
}
