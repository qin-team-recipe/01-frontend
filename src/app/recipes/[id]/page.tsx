"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FollowButton } from "@/components/FollowButton";
import { IconAddCart, IconCopy } from "@/components/Icon";
import { TabBar } from "@/components/TabBar";

import { Chef, Recipe } from "../../api/types";
import styles from "./recipe.module.scss";

// レシピ
const getRecipe = async (id: string) => {
  const response = await fetch(`/api/recipes/${id}`);
  const recipe: Recipe = await response.json();
  return recipe;
};

// シェフ
const getChef = async (id: string | number) => {
  const response = await fetch(`/api/chefs/${id}`);
  const chef: Chef = await response.json();
  return chef;
};

export default async function Page({ params }: { params: { id: string } }) {
  const recipe = await getRecipe(params.id);
  const chef = await getChef(3);

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

  const handleStepsCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateStepsText(recipe));
    } catch (err) {
      console.error("テキストのコピーに失敗しました", err);
    }
  };

  const handleMaterialsCopy = async () => {
    try {
      await navigator.clipboard.writeText(generateMaterialsText(recipe));
    } catch (err) {
      console.error("テキストのコピーに失敗しました", err);
    }
  };

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
