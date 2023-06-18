"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchInput } from "@/components/SearchInput";

import styles from "./top.module.scss";

export const metadata = {
  title: "Top Chefs",
};

export default function Home() {
  const router = useRouter();
  const handleKeyword = (keyword: string) => {
    if (keyword) {
      router.push(`/search/recipe?q=${keyword}`);
    }
  };

  return (
    <main>
      <div className={styles["search-input"]}>
        <SearchInput mode="top" handleKeyword={handleKeyword} />
      </div>
      <Image
        src="/images/chef-dummy.png"
        alt=""
        width={390}
        height={520}
        className={styles.img}
      />
      <div className="inner">
        <h1 className={styles["chef-name"]}>山田シェフ</h1>
        <p className={styles["chef-description"]}>
          初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ
          ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！
          絶賛発売中！
        </p>
        <p className={styles.follow}>
          <span className={styles["follow-count"]}>456</span>
          <span>フォロワー</span>
        </p>
      </div>
    </main>
  );
}
