import { NextResponse } from "next/server";

const dummyData = [
  {
    id: 3,
    name: "話題のグラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "https://example.com",
    chef_name: "アンミカ",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 4,
    name: "話題のスパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "https://example.com",
    chef_name: "ジュリア",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 5,
    name: "話題のグラタン",
    description: "白が200色わかる方",
    favorite_count: 12,
    thumbnail: "https://example.com",
    chef_name: "アンミカ",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 6,
    name: "話題のスパゲッティ",
    description: "トマトベースのソース",
    favorite_count: 15,
    thumbnail: "https://example.com",
    chef_name: "ジュリア",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /recipes or /recipes?count=10
export const GET = async () => {
  // const response = await fetch(`/api/v1/recipes`);
  // const data = await response.json();
  // TODO: dummy data
  const data = dummyData;
  return NextResponse.json(data);
};