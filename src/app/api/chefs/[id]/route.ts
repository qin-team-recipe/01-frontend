import { NextResponse } from "next/server";

import { Chef } from "../../types";

const dummyData = [
  {
    id: 3,
    name: "アンミカ",
    description: "白が200色わかる方",
    follower_count: 12,
    recipe_count: 34,
    thumbnail: "/images/featured-chef1.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
    external_links: [
      {
        title: "こんにちはサイト",
        url: "https://example.com",
        type: "Twitter",
        logo: "https://twitter.logo.com",
        follower_count: 1222,
      },
    ],
  },
];

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/chefs/${id}`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(dummyData);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Chef = await response.json();

  return NextResponse.json(data);
};
