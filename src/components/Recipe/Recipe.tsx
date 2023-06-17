import styles from './Recipe.module.scss';
import Image from "next/image";


export const Recipe = () => {
  const fav_count_number = 1234
  return (
    <div className="inner">
      <div className={styles.imgWrapper}>
        <div className={styles.favCount}>
        <Image src="/icon/heart.svg" width={11.67} height={10.5} alt="" />
          <span className={styles.favNumber}>{fav_count_number.toLocaleString()}</span>
        </div>

        <Image
          src="/images/recipe-dummy.png"
          alt=""
          width={173}
          height={173}
          className={styles.img}
        />
      </div>

      <h1 className={styles["recipe-name"]}>トマトとルッコラのマルゲリータピザに合うホワイトソースグラタン</h1>
      <p className={styles["recipe-description"]}>
        ウルトラハイパー超すごいしまぶーシェフ
      </p>
    </div>
  );
};

export default Recipe;
