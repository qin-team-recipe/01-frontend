import { NextResponse } from "next/server";

import { FavoriteNewRecipe } from "../../../types";

// /users/:user_id/favorite_new_recipes
export const GET = async (
  request: Request,
  { params }: { params: { user_id: string } }
) => {
  const userId = params.user_id;
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/users/${userId}/favorite_new_recipes`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: FavoriteNewRecipe[] = await response.json();

  return NextResponse.json(data);
};
