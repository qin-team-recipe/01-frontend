// シェフ検索 /chefs/search?keyword=:keyword
export type SearchChef = {
  id: number;
  name: string;
  description: string;
  follower_count: number;
  recipe_count: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
};
