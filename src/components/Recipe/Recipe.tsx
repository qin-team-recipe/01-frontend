import styles from './Recipe.module.scss';
import Image from "next/image";

export const Recipe = () => {
  return (
    <div className="inner">
      <Image
        src="/images/recipe-dummy.png"
        alt=""
        width={173}
        height={173}
        className={styles.img}
      />

      <h1 className={styles["recipe-name"]}>トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン</h1>
      <p className={styles["recipe-description"]}>
        ウルトラハイパー超すごいしまぶーシェフ
      </p>
    </div>
  );
};

export default Recipe;
