import Image from "next/image";

import styles from "./RecipeCard.module.scss";

export interface RecipeCardProps {
  favCountNumber: number;
  name: string;
  description: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  favCountNumber,
  name,
  description,
}) => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <div className={styles.favCount}>
          <Image src="/icon/heart.svg" width={10} height={9} alt="" />
          <span className={styles.favNumber}>
            {favCountNumber.toLocaleString()}
          </span>
        </div>

        <Image
          src="/images/recipe-dummy.png"
          alt=""
          width={173}
          height={173}
          className={styles.img}
        />
      </div>

      <h1 className={styles["recipe-name"]}>{name}</h1>
      <p className={styles["recipe-description"]}>{description}</p>
    </div>
  );
};

export default RecipeCard;
