"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { IconSearch } from "../Icon";
import styles from "./SearchInput.module.scss";

export const SearchInput = () => {
  const router = useRouter();
  const [mode, setMode] = useState<"top" | "search">("top");
  const [searchWord, setSearchWord] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.wrap}>
      {mode === "search" ? (
        <div className={styles["icon-left-arrow"]}>
          <Image
            className={styles.pointer}
            src={"/icon/arrow-left.svg"}
            width={20}
            height={20}
            alt=""
            onClick={() => {
              router.push("/");
            }}
          />
        </div>
      ) : null}
      <div className={styles["search-box"]}>
        <div className={styles["icon-search"]}>
          <IconSearch color="#6f6e77" />
        </div>
        <input
          type="text"
          name="searchWord"
          value={searchWord}
          className={styles["search-input"]}
          placeholder="シェフやレシピを検索"
          autoComplete="off"
          onChange={(e) => {
            setLoading(true);
            setSearchWord(e.target.value);
          }}
        />
        <div className={styles["icon-close"]}>
          {loading ? (
            <Image src={"/icon/spinner.svg"} width={20} height={20} alt="" />
          ) : searchWord ? (
            <Image
              className={styles.pointer}
              src={"/icon/close.svg"}
              width={20}
              height={20}
              alt=""
              onClick={() => {
                setSearchWord("");
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
