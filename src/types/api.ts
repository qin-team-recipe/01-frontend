export type SearchRepices = {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  thumbnail: string;
  chef_name: string;
  created_at: string;
  updated_at: string;
};

export type SearchChefs = {
  id: number;
  name: string;
  description: string;
  favorite_count: number;
  recipe_count: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
};
