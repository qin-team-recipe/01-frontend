"use client";

import { TabBar } from "@/components/TabBar";

import styles from "./popular.module.scss";

// TODO: APIと連携するまでの仮実装
const dummyData = {
  tabs: [
    { id: 1, label: "新着レシピ" },
    { id: 2, label: "人気レシピ" },
  ],
  activeTabId: 1,
};

const handleTab = (tabId: number) => {
  console.log(tabId);
};

export default function Page({ params }: { params: { target: string } }) {
  return (
    <main className={styles.page}>
      <div>chef/{params.target}/popular</div>
      <TabBar data={dummyData} onDataSend={handleTab} />
    </main>
  );
}
