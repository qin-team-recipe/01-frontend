import { NextResponse } from "next/server";

const dummyData = [
  {
    id: 3,
    name: "アンミカsss",
    thumbnail: "/images/featured-chef1.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 4,
    name: "ジュリア",
    thumbnail: "/images/featured-chef2.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 5,
    name: "トム",
    thumbnail: "/images/featured-chef3.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 6,
    name: "しまぶー",
    thumbnail: "/images/featured-chef4.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /trending_chefs
export const GET = async () => {
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/trending_chefs`
  ).catch(() => {
    // return NextResponse.json([]);
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    return NextResponse.json([]);
  }
  const data = await response.json();

  return NextResponse.json(data);
};
