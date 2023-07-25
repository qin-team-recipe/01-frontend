"use client";

import { useState } from "react";

import styles from "./TabBar.module.scss";

export type Props = {
  data: {
    tabs: {
      id: number;
      label: string;
    }[];
    activeTabId: number;
  };
};

export const TabBar = ({ data }: Props) => {
  const [activeTab, setActiveTab] = useState(data.activeTabId);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className={styles.tabs}>
        {data.tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
