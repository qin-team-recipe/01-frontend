"use client";

import { useState } from "react";

import styles from "./TabBar.module.scss";

export type Props = {
  data: {
    id: number;
    label: string;
  }[];
};

export const TabBar = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState(data[0].id);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {data.map((list) => (
          <button
            key={list.id}
            className={`${styles.tab} ${
              activeTab === list.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(list.id)}
          >
            {list.label}
          </button>
        ))}
      </div>
    </div>
  );
};
