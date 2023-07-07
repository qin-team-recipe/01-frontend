import { ShoppingList } from "./ShoppingList";

export default {
  component: ShoppingList,
};

export const Default = {
  args: {
    data: {
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
    },
  },
};
