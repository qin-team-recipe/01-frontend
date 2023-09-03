import { NextResponse } from "next/server";

import { FavoriteRecipe } from "@/app/api/types";

const dummyData = [
  {
    recipe_id: 3,
    name: "話題のグラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "アンミカ",
    is_public: true,
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    recipe_id: 4,
    name: "話題のスパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "ジュリア",
    is_public: true,
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    recipe_id: 5,
    name: "話題のグラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "アンミカ",
    is_public: true,
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    recipe_id: 6,
    name: "話題のスパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "ジュリア",
    is_public: true,
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    recipe_id: 7,
    name: "話題のfalseグラタン",
    description: "falseが200falseわかる方",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_name: "falseアンミカ",
    is_public: false,
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /users/:user_id/favorite_recipes
export const GET = async (
  request: Request,
  { params }: { params: { user_id: string } }
) => {
  const userId = params.user_id;
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/users/${userId}/favorite_recipes`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: FavoriteRecipe[] = await response.json();

  return NextResponse.json(data);
};
