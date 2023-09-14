import { NextResponse } from "next/server";

// /current_user
export const GET = async () => {
  const response = await fetch(
    `${process.env.API_BACK_URL}/api/v1/current_user`
  ).catch(() => {
    // throw new Error("Failed to fetch data");
    // TODO: dummy data
    return NextResponse.json(123);
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: number = await response.json();

  return NextResponse.json(data);
};
