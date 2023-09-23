import { NextResponse } from "next/server";

import { TrendingChef } from "../types";

// /trending_chefs
export const GET = async () => {
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/trending_chefs`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: TrendingChef[] = await response.json();

  return NextResponse.json(data);
};
