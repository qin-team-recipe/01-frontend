import Link from "next/link";

import styles from "./Header.module.scss";

type Props = {
  children: React.ReactNode;
  h1?: boolean;
  position?: "left" | "center" | "right";
  icon?: React.ReactNode;
  href?: string;
  textColor?: string;
  textSize?: string;
};

export const Header = ({
  children,
  h1,
  position,
  icon,
  href,
  textColor,
  textSize,
}: Props) => {
  return (
    <div
      className={`${styles.titleWrapper} ${position ? styles[position] : ""} ${
        textColor ? styles[textColor] : ""
      } ${textSize ? styles[textSize] : ""} inner`}
    >
      {href ? (
        <Link href={href} className={styles.link}>
          <span className={styles.icon}>{icon && icon}</span>
        </Link>
      ) : (
        <span className={styles.icon}>{icon && icon}</span>
      )}
      {h1 && <h1 className={styles.title}>{children}</h1>}
    </div>
  );
};
