import { NextResponse } from "next/server";

import { Chef } from "../types";

// /chefs
export const GET = async () => {
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/chefs`
  ).catch(() => {
    throw new Error("System error to fetch data");
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Chef[] = await response.json();

  return NextResponse.json(data);
};
