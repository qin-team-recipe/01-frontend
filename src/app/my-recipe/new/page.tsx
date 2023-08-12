import React from "react";

import { RecipeEdit } from "@/components/RecipeEdit";

export const metadata = {
  title: "マイレシピ新規作成",
};

export default function Home() {
  return <RecipeEdit type="new" />;
}
