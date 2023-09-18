import { NextResponse } from "next/server";

import { FavoriteChef } from "../../../types";

// /users/:user_id/favorite_chefs
export const GET = async (
  request: Request,
  { params }: { params: { user_id: string } }
) => {
  const userId = params.user_id;
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/users/${userId}/favorite_chefs`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: FavoriteChef[] = await response.json();

  return NextResponse.json(data);
};
