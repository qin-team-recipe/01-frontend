import React, { FC, ReactElement } from "react";

import styles from "./ContentsInner.module.scss";

type Props = {
  children: ReactElement;
  noSpace?: "left" | "right" | "full"
};

export const ContentsInner: FC<Props> = ({ children }) => {
  return <div className={`${styles.noSpace} inner`}>{children}</div>;
};
