import { TabBar } from "@/components/TabBar";

import styles from "./chef.module.scss";

// TODO: APIと連携するまでの仮実装
const dummyData = [
  { label: "新着レシピ", isActive: false },
  { label: "人気レシピ", isActive: true },
];

export default function Page({ params }: { params: { target: string } }) {
  return (
    <main className={styles.page}>
      <div>chef/{params.target}</div>
      <TabBar data={dummyData} />
    </main>
  );
}
