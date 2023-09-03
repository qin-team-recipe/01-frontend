// シェフ検索 /chefs/search?keyword=:keyword
export type Chef = {
  id: number;
  name: string;
  description: string;
  follower_count: number;
  recipe_count: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
};

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

// 注目のシェフ一覧 /trending_chefs
export type TrendingChef = {
  id: number;
  name: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
};

// お気に入りシェフ参照 /users/:user_id/favorite_chefs
export type FavoriteChef = {
  chef_id: number;
  name: string;
  thumbnail: string;
  created_at: string;
  updated_at: string;
};

// 新着レシピ（お気に入りページのお気に入りシェフの新着レシピ） /users/:user_id/favorite_new_recipes
export type FavoriteNewRecipe = {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  thumbnail: string;
  chef_name: string;
  created_at: string;
  updated_at: string;
};
