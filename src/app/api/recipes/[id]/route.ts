import { NextResponse } from "next/server";

import { Recipe } from "../../types";

const dummyData = [
  {
    id: 3,
    name: "グラタン",
    description:
      "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\nソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
    favorite_count: 12,
    thumbnail: "/images/recipe-dummy.png",
    chef_id: 3,
    chef_name: "アンミカ",
    serving_size: 2,
    steps: [
      {
        position: 1,
        description:
          "野菜を切るあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
      },
      {
        position: 2,
        description: "鍋に材料を入れる",
      },
      {
        position: 3,
        description: "盛り付ける",
      },
      {
        position: 4,
        description: "盛り付ける",
      },
      {
        position: 5,
        description: "盛り付ける",
      },
      {
        position: 6,
        description: "盛り付ける",
      },
      {
        position: 7,
        description: "盛り付ける",
      },
      {
        position: 8,
        description: "盛り付ける",
      },
      {
        position: 9,
        description: "盛り付ける",
      },
      {
        position: 10,
        description: "盛り付ける",
      },
      {
        position: 11,
        description: "盛り付ける",
      },
      {
        position: 12,
        description: "盛り付ける",
      },
    ],
    materials: [
      {
        position: 1,
        name: "りんご",
      },
      {
        position: 2,
        name: "豚肉",
      },
      {
        position: 3,
        name: "玉ねぎ",
      },
    ],
    external_links: [
      {
        url: "https://example.com",
        type: "Twitter",
        logo: "https://twitter.logo.com",
      },
    ],
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /chefs/search?keyword=:keyword
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  console.log(id);

  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/recipes${id}`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Recipe = await response.json();

  return NextResponse.json(data);
};
