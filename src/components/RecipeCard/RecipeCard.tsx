import Image from "next/image";

import { IconHeart } from "../Icon";
import styles from "./RecipeCard.module.scss";

export interface RecipeCardProps {
  favCountNumber: number;
  name: string;
  description: string;
  isTop?: boolean;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  favCountNumber,
  name,
  description,
  isTop = false,
}) => {
  return (
    <div>
      <div className={isTop ? styles.imgWrapperTop : styles.imgWrapper}>
        {favCountNumber > 0 && (
          <div className={styles.favCount}>
            <span className={styles["icon-heart"]}>
              <IconHeart color="#FFFFFF" />
            </span>
            <span className={styles.favNumber}>
              {favCountNumber.toLocaleString()}
            </span>
          </div>
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
