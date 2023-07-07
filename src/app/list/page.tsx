import React from "react";

import { ListTitle } from "@/components/ListTitle";
import { ShoppingList } from "@/components/ShoppingList";

import styles from "./list.module.scss";

export type CartsType = {
  user_id: number;
  lists: {
    id: number;
    recipe_id: number | null;
    name: string;
    own_notes: boolean;
    position: number;
    materials: {
      name: string;
      memo: string;
      is_checked: boolean;
      created_at: string;
      updated_at: string;
    }[];
  }[];
};

// TODO: APIと連携するまでの仮実装
const dummyData: CartsType = {
  user_id: 3,
  lists: [
    {
      id: 1,
      recipe_id: null,
      name: "じぶんメモ",
      own_notes: true,
      position: 1,
      materials: [
        {
          name: "ブロッコリー",
          memo: "ブロッコリーおいしい",
          is_checked: true,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
        {
          name: "チーズ",
          memo: "とろけるチーズ",
          is_checked: false,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
      ],
    },
    {
      id: 4,
      recipe_id: 7,
      name: "カレー",
      own_notes: false,
      position: 2,
      materials: [
        {
          name: "じゃがいも",
          memo: "中くらいの大きさ",
          is_checked: false,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
        {
          name: "カレールウ",
          memo: "",
          is_checked: false,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
      ],
    },
  ],
};

export const metadata = {
  title: "買い物リスト",
};

export default function Home() {
  return (
    <main className={styles.page}>
      <ListTitle>買い物リスト</ListTitle>
      <ShoppingList data={dummyData} />
    </main>
  );
}
