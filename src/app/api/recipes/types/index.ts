// レシピ検索 /recipes/search?keyword=:keyword
export type Recipe = {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  thumbnail: string;
  chef_name: string;
  created_at: string;
  updated_at: string;
};
