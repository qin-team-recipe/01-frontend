import { TabBar } from "@/components/TabBar";

import styles from "./chef.module.scss";

// TODO: APIと連携するまでの仮実装
const dummyData = {
  tabs: [
    { id: 1, label: "新着レシピ" },
    { id: 2, label: "人気レシピ" },
  ],
  activeTabId: 2,
};

export default function Page({ params }: { params: { target: string } }) {
  return (
    <main className={styles.page}>
      <div>chef/{params.target}</div>
      <TabBar data={dummyData} />
    </main>
  );
}
