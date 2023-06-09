import Image from "next/image";

import styles from "./ChefCard.module.scss";

export interface ChefCardProps {
  src: string;
  name: string;
  description: string;
  count: number;
}

export const ChefCard: React.FC<ChefCardProps> = ({
  src,
  name,
  description,
  count = 0,
}) => {
  return (
    <div className={styles["chef-card"]}>
      <div className={styles["card-left"]}>
        <Image src={src} fill sizes="100%" alt="" />
      </div>
      <div className={styles["card-right"]}>
        <div className={styles["chef-name"]}>{name}</div>
        <div className={styles["chef-description"]}>{description}</div>
        <div className={styles["recipe-count"]}>
          <Image src={"/icon/knife-fork.svg"} width={16} height={24} alt="" />
          <p>{count.toLocaleString()}レシピ</p>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
