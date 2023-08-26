import Image from "next/image";

import { IconHeart } from "../Icon";
import styles from "./RecipeCard.module.scss";

export type RecipeCardProps = {
  name: string;
  description: string;
  favoriteCount: number;
  isPublic?: boolean;
  isTop?: boolean;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  favoriteCount,
  name,
  description,
  isPublic = true,
  isTop = false,
}) => {
  return (
    <div>
      <div className={isTop ? styles.imgWrapperTop : styles.imgWrapper}>
        {isPublic ? (
          favoriteCount > 0 && (
            <div className={styles.favCount}>
              <span className={styles["icon-heart"]}>
                <IconHeart color="#FFFFFF" />
              </span>
              <span className={styles.favNumber}>
                {favoriteCount.toLocaleString()}
              </span>
            </div>
          )
        ) : (
          <span className={`${styles.favCount} ${styles["not-public"]}`}>
            非公開
          </span>
        )}

        <Image
          src="/images/recipe-dummy.png"
          alt=""
          className={styles.img}
          fill
        />
      </div>

      <h1 className={styles["recipe-name"]}>{name}</h1>
      <p className={styles["recipe-description"]}>{description}</p>
    </div>
  );
};

export default RecipeCard;
