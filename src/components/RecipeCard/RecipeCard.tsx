import Image from "next/image";

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
            <Image src="/icon/heart.svg" width={10} height={9} alt="" />
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
