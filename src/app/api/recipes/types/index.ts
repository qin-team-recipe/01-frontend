// レシピ検索 /recipes/search?keyword=:keyword
export type SearchRecipe = {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  thumbnail: string;
  chef_name: string;
  created_at: string;
  updated_at: string;
};
