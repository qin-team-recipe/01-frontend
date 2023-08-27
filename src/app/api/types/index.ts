// シェフ検索 /chefs/search?keyword=:keyword
export type Chef = {
  id: number;
  name: string;
  description: string;
  follower_count: number;
  recipe_count: number;
  thumbnail: string;
  external_links: ExternalLink[];
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
  chef_id: number;
  chef_name: string;
  serving_size: number;
  steps: Step[];
  materials: Material[];
  external_links: ExternalLink[];
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

export type Step = {
  position: number;
  description: string;
};

export type Material = {
  position: number;
  name: string;
};

export type ExternalLink = {
  url: string;
  type: string;
};
