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

// /recipes or /recipes?count=10 or /recipes?page=1
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get("count");
  const page = searchParams.get("page");
  console.log("page:", page);

  const query = count ? `?count=${count}` : page ? `?page=${page}` : "";
  // const response = await fetch(
  //   `${process.env.API_BACK_URL}/api/v1/recipes${query}`
  // );

  // const data = await response.json();

  // TODO: dummy data
  const data = dummyData;
  return NextResponse.json(data);
};
