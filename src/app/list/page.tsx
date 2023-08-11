import React from "react";

import { Header } from "@/components/Header";
import { ShoppingList } from "@/components/ShoppingList";

import styles from "./list.module.scss";

export type CartsType = {
  user_id: number;
  lists: CartsListType[];
};

export type CartsListType = {
  id: number;
  recipe_id: number | null;
  name: string;
  own_notes: boolean;
  position: number;
  materials: {
    name: string;
    position: number;
    is_checked: boolean;
    created_at: string;
    updated_at: string;
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
          is_checked: true,
          position: 1,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
        {
          name: "チーズ",
          is_checked: false,
          position: 2,
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
          is_checked: false,
          position: 1,
          created_at: "2023-6-16 10:45",
          updated_at: "2023-6-20 15:45",
        },
        {
          name: "カレールウ",
          is_checked: false,
          position: 2,
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
      <Header h1>買い物リスト</Header>
      <ShoppingList data={dummyData} />
    </main>
  );
}
