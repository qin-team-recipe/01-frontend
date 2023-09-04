import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./ChefCircleImage.module.scss";

export type ChefCircleImageProps = {
  id: number;
  thumbnail: string;
  name?: string;
};

export const ChefCircleImage: React.FC<ChefCircleImageProps> = ({
  id,
  thumbnail,
  name,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles["chef-circle"]}>
        <Link href={`/chef/${id}`}>
          <Image src={thumbnail} width={68} height={68} alt="" />
        </Link>
      </div>
      <div className={styles["chef-name"]}>{name}</div>
    </div>
  );
};
