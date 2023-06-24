import Image from "next/image";

import styles from "./ChefCard.module.scss";

export interface ChefCardProps {
  src: string;
  width: number;
  height: number;
  name?: string;
}

export const ChefCard: React.FC<ChefCardProps> = ({
  src,
  width,
  height,
  name,
}) => {
  return (
    <div className={styles["chef-image"]}>
      <Image src={src} width={width} height={height} alt="" />
      <p className={styles["chef-name"]}>{name}</p>
    </div>
  );
};

export default ChefCard;
