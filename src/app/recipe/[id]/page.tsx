import Image from "next/image";
import Link from "next/link";

import styles from "../recipe.module.scss";

interface Step {
  title: string;
}

interface Material {
  name: string;
}

interface ExternalLink {
  url: string;
  type: string;
  logo: string;
  follower_count?: number;
}

interface Recipe {
  id: string;
  name: string;
  description: string;
  favorite_count: number;
  thumbnail: string;
  chef_name: string;
  serving_size: number;
  steps: Step[];
  materials: Material[];
  external_links: ExternalLink[];
  created_at: string;
  updated_at: string;
}

interface Chef {
  id: number;
  name: string;
  description: string;
  follower_count: number;
  recipe_count: number;
  thumbnail: string;
  created_at: string;
  updated_at: string;
  external_links: ExternalLink[];
}

const recipeData = {
  id: "3",
  name: "グラタン",
  description:
    "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\nソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
  favorite_count: 12,
  thumbnail: "/images/recipe-dummy.png",
  chef_name: "アンミカ",
  serving_size: 2,
  steps: [
    {
      title: "野菜を切る",
    },
    {
      title: "鍋に材料を入れる",
    },
    {
      title: "盛り付ける",
    },
  ],
  materials: [
    {
      name: "りんご",
    },
    {
      name: "豚肉",
    },
    {
      name: "玉ねぎ",
    },
  ],
  external_links: [
    {
      url: "https://example.com",
      type: "Twitter",
      logo: "https://twitter.logo.com",
    },
  ],
  created_at: "2023-6-16 10:45",
  updated_at: "2023-6-20 15:45",
};

const chefData = {
  id: 3,
  name: "アンミカ",
  description: "白が200色わかる方",
  follower_count: 12,
  recipe_count: 34,
  thumbnail: "/images/featured-chef1.png",
  created_at: "2023-6-16 10:45",
  updated_at: "2023-6-20 15:45",
  external_links: [
    {
      title: "こんにちはサイト",
      url: "https://example.com",
      type: "Twitter",
      logo: "https://twitter.logo.com",
      follower_count: 1222,
    },
  ],
};

const recipeArray: Recipe[] = [recipeData];

const chefArray: Chef[] = [chefData];

export default function Page({ params }: { params: { id: string } }) {
  const recipe = recipeArray.find((recipe) => recipe.id === params.id);

  if (!recipe) {
    return {
      notFound: true,
    };
  }

  const chef = chefArray.find(
    (chef: Chef) => chef.name === recipe.chef_name
  ) as Chef;

  return (
    <main className={styles.page}>
      <Image
        src={recipe.thumbnail}
        alt=""
        width={1000}
        height={1000}
        className={styles.img}
      />
      <section className={styles.detailSection}>
        <h1 className={styles.title}>{recipe.name}</h1>
        <p className={styles.description}>{recipe.description}</p>

        <div className={styles.container}>
          <div className={styles.chefIconWrapper}>
            <Link href={`/chef/${chef.id}`}>
              <Image src={chef.thumbnail} width={20} height={20} alt="" />
            </Link>
          </div>
          <div className={styles.item}>
            <Link href={`/chef/${chef.id}`}>{chef.name}</Link>
          </div>
          <div>
            <strong>{chef.follower_count}</strong> フォロワー
          </div>
        </div>
      </section>
    </main>
  );
}
