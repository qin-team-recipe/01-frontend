import { NextResponse } from "next/server";

import { FavoriteChef } from "../../../types";

const dummyData = [
  {
    chef_id: 3,
    name: "アンミカFaFa",
    thumbnail: "/images/featured-chef1.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 4,
    name: "ジュリア",
    thumbnail: "/images/featured-chef2.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 5,
    name: "トム",
    thumbnail: "/images/featured-chef3.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 6,
    name: "しまぶー",
    thumbnail: "/images/featured-chef4.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 3,
    name: "アンミカFaFa",
    thumbnail: "/images/featured-chef1.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 4,
    name: "ジュリア",
    thumbnail: "/images/featured-chef2.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 5,
    name: "トム",
    thumbnail: "/images/featured-chef3.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    chef_id: 6,
    name: "しまぶー",
    thumbnail: "/images/featured-chef4.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /users/:user_id/favorite_chefs
export const GET = async (
  request: Request,
  { params }: { params: { user_id: string } }
) => {
  const userId = params.user_id;
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/users/${userId}/favorite_chefs`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: FavoriteChef[] = await response.json();

  return NextResponse.json(data);
};
