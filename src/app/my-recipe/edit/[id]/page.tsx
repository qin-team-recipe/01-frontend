import React from "react";

import { RecipeEdit } from "@/components/RecipeEdit";

export const metadata = {
  title: "マイレシピ編集",
};

export default function Home() {
  return <RecipeEdit type="edit" />;
}
