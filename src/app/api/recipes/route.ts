import { NextResponse } from "next/server";

import { Recipe } from "../types";

// /recipes or /recipes?count=10 or /recipes?page=1
export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const count = searchParams.get("count");
  const page = searchParams.get("page");
  const query = count ? `?count=${count}` : page ? `?page=${page}` : "";

  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/recipes${query}`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Recipe[] = await response.json();

  return NextResponse.json(data);
};
