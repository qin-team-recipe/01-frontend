import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <button className={styles.button}>{children}</button>;
};
