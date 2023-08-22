import { NextResponse } from "next/server";

const dummyData = [
  {
    id: 3,
    name: "アンミカaaa",
    description:
      "！初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    follower_count: 12,
    recipe_count: 123,
    thumbnail: "/images/featured-chef1.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 4,
    name: "ジュリア",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    follower_count: 23,
    recipe_count: 1234,
    thumbnail: "/images/featured-chef2.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 5,
    name: "トム",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    follower_count: 0,
    recipe_count: 1234,
    thumbnail: "/images/featured-chef3.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
  {
    id: 6,
    name: "しまぶー",
    description:
      "初の絵本出版！『まねっこシェフ』・ふわふわ！スクランブルエッグ・にぎにぎ！おにぎり・主婦の友社より３月３日、２冊同時発売！絶賛発売中！",
    follower_count: 56,
    recipe_count: 1234,
    thumbnail: "/images/featured-chef4.png",
    created_at: "2023-6-16 10:45",
    updated_at: "2023-6-20 15:45",
  },
];

// /recipes or /recipes?count=10
export const GET = async () => {
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/recipes`
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
