import { NextResponse } from "next/server";

import { Chef } from "../../types";

// /chefs/search?keyword=:keyword
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const keyword = searchParams.get("keyword");

  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/chefs/search?keyword=${keyword}`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Chef[] = await response.json();

  return NextResponse.json(data);
};
