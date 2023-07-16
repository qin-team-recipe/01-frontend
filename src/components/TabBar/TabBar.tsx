"use client";

import { useState } from "react";

import styles from "./TabBar.module.scss";

export type Props = {
  data: {
    label: string;
    isActive: boolean;
  }[];
};

export const TabBar = ({ data }: Props) => {
  const initial = data.findIndex((d) => d.isActive);
  const [activeTab, setActiveTab] = useState(initial);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {data.map((list, index) => (
          <button
            key={index}
            className={`${styles.tab} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {list.label}
          </button>
        ))}
      </div>
    </div>
  );
};
