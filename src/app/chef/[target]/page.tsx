import { FollowButton } from "@/components/FollowButton";
import { TabBar } from "@/components/TabBar";

import styles from "./chef.module.scss";

// TODO: APIと連携するまでの仮実装
const dummyData = [
  { id: 1, label: "新着レシピ" },
  { id: 2, label: "人気レシピ" },
];
const dummyData2 = {
  initialText: "フォローする",
  followingText: "フォロー中",
  isFollowing: false,
};

export default function Page({ params }: { params: { target: string } }) {
  return (
    <main className={styles.page}>
      <div>chef/{params.target}</div>
      <FollowButton
        initialText={dummyData2.initialText}
        followingText={dummyData2.followingText}
        isFollowing={dummyData2.isFollowing}
      />
      <TabBar data={dummyData} />
    </main>
  );
}
