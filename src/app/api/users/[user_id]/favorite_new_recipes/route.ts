import { NextResponse } from "next/server";

import { FavoriteNewRecipe } from "../../../types";

const dummyData = [
  {
    id: 3,
    name: "グラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "アンミカ",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 4,
    name: "スパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "ジュリア",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 5,
    name: "グラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "アンミカ",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 6,
    name: "スパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "ジュリア",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /users/:user_id/favorite_new_recipes
export const GET = async (
  request: Request,
  { params }: { params: { user_id: string } }
) => {
  const userId = params.user_id;
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/users/${userId}/favorite_new_recipes`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: FavoriteNewRecipe[] = await response.json();

  return NextResponse.json(data);
};
