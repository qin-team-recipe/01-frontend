"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FollowButton } from "@/components/FollowButton";
import { IconAddCart, IconCopy } from "@/components/Icon";
import { TabBar } from "@/components/TabBar";

import styles from "../recipe.module.scss";

interface Step {
  position: number;
  description: string;
}

interface Material {
  position: number;
  name: string;
}

interface ExternalLink {
  url: string;
  type: string;
  logo: string;
  follower_count?: number;
}

interface Recipe {
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

const recipe = {
  id: 3,
  name: "グラタン",
  description:
    "はじめてでも失敗なく作れるような、鶏肉や玉ねぎを具とした基本的なマカロニグラタンのレシピです。\nソースと具材炒めを別器具で行うレシピも多いですが、グラタンの具を炒めたフライパンの中で、そのままホワイトソースを仕上げる手軽な作り方にしています。ぜひお試しください。",
  favorite_count: 12,
  thumbnail: "/images/recipe-dummy.png",
  chef_id: 3,
  chef_name: "アンミカ",
  serving_size: 2,
  steps: [
    {
      position: 1,
      description:
        "野菜を切るあああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ",
    },
    {
      position: 2,
      description: "鍋に材料を入れる",
    },
    {
      position: 3,
      description: "盛り付ける",
    },
    {
      position: 4,
      description: "盛り付ける",
    },
    {
      position: 5,
      description: "盛り付ける",
    },
    {
      position: 6,
      description: "盛り付ける",
    },
    {
      position: 7,
      description: "盛り付ける",
    },
    {
      position: 8,
      description: "盛り付ける",
    },
    {
      position: 9,
      description: "盛り付ける",
    },
    {
      position: 10,
      description: "盛り付ける",
    },
    {
      position: 11,
      description: "盛り付ける",
    },
    {
      position: 12,
      description: "盛り付ける",
    },
  ],
  materials: [
    {
      position: 1,
      name: "りんご",
    },
    {
      position: 2,
      name: "豚肉",
    },
    {
      position: 3,
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

const chef = {
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

export default function Page({ params }: { params: { id: string } }) {
  const [activeTabId, setActiveTabId] = useState(1);

  const handleTab = (tabId: number) => {
    setActiveTabId(tabId);
  };

  const tabData = {
    tabs: [
      { id: 1, label: "作り方" },
      { id: 2, label: "材料" },
    ],
    activeTabId: activeTabId,
  };

  const generateStepsText = (data: Recipe) => {
    let text = "作り方\n\n";
    const steps = data.steps;

    steps.forEach((step) => {
      text += `${step.position}.${step.description}\n`;
    });

    return text;
  };

  const generateMaterialsText = (data: Recipe) => {
    let text = `材料（${data.serving_size}人前）\n\n`;
    const materials = data.materials;

    materials.forEach((material) => {
      text += `・${material.name}\n`;
    });

    return text;
  };

  async function handleStepsCopy() {
    try {
      await navigator.clipboard.writeText(generateStepsText(recipe!));
    } catch (err) {
      console.error("テキストのコピーに失敗しました", err);
    }
  }

  async function handleMaterialsCopy() {
    try {
      await navigator.clipboard.writeText(generateMaterialsText(recipe!));
    } catch (err) {
      console.error("テキストのコピーに失敗しました", err);
    }
  }

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
            <strong>{chef.follower_count}</strong> お気に入り
          </div>
        </div>

        <FollowButton
          initialText={"お気に入りに追加"}
          followingText={"お気に入りに追加済"}
          isFollowing={false} // TODO: ユーザーがこのレシピをお気に入りにしているかどうかをAPIで返すようにしてから、ここの制御の実装をする
        />
      </section>

      <TabBar data={tabData} onDataSend={handleTab} />

      {activeTabId === 1 && (
        <>
          {recipe.steps.map((step) => (
            <div key={step.position} className={styles.separator}>
              <div className={styles.stepContainer}>
                <div className={styles.stepNumber}>
                  <div className={styles.stepCircle}>{step.position}</div>
                </div>
                <div className={styles.stepTitle}>{step.description}</div>
              </div>
            </div>
          ))}

          <div className={styles.copyButton} onClick={handleStepsCopy}>
            <button>
              <IconCopy color="#006ADC" />
            </button>
            <button className={styles.copyOperation}>コピーする</button>
          </div>
        </>
      )}

      {activeTabId === 2 && (
        <>
          <div className={`${styles.separator} ${styles.materialHeader}`}>
            <h1 className={styles.servingSize}>{recipe.serving_size}人前</h1>
            <button className={styles.bulkAddCart}>
              <IconAddCart color="#908E96" />
              まとめてお買い物に追加
            </button>
          </div>
          {recipe.materials.map((material) => (
            <div key={material.name} className={styles.separator}>
              <div className={styles.materialContainer}>
                <div className={styles.materialName}>{material.name}</div>
                <button>
                  <IconAddCart color="#6F6E77" />
                </button>
              </div>
            </div>
          ))}

          <div className={styles.copyButton} onClick={handleMaterialsCopy}>
            <button>
              <IconCopy color="#006ADC" />
            </button>
            <button className={styles.copyOperation}>コピーする</button>
          </div>
        </>
      )}
    </main>
  );
}
