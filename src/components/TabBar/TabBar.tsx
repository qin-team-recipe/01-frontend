"use client";

import { useState } from "react";

import styles from "./TabBar.module.scss";

interface TabData {
  id: number;
  label: string;
}

interface Props {
  data: {
    activeTabId: number;
    tabs: TabData[];
  };
  onDataSend?: (tabId: number) => void;
}

export const TabBar = ({ data, onDataSend }: Props) => {
  console.log("data", data)
  console.log("onDataSend", onDataSend)
  const [activeTab, setActiveTab] = useState(data.activeTabId);

  const handleTabClick = (tabId: number) => {
    setActiveTab(tabId);
    if (onDataSend) {
      onDataSend(tabId);
    }
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
