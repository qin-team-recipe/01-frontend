import styles from "./ListTitle.module.scss";

type Props = {
  children: React.ReactNode;
};

export const ListTitle = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};
