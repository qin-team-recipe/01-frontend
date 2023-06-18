"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import IconSearch from "../IconSearch/IconSearch";
import styles from "./SearchInput.module.scss";
import useDebounce from "./useDebounce";

type Props = {
  mode: "top" | "search";
  queryWord?: string | null;
  handleKeyword: (keyword: string) => void;
};

export const SearchInput = ({ mode, queryWord, handleKeyword }: Props) => {
  const router = useRouter();

  const [searchWord, setSearchWord] = useState<string>(queryWord ?? "");
  const { debounceWord } = useDebounce(searchWord, 1200);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (debounceWord) {
      handleKeyword(debounceWord);
    } else {
      handleKeyword("");
    }
    return () => {
      setLoading(false);
    };
  }, [handleKeyword, debounceWord]);

  return (
    <div className={styles["box-search"]}>
      {mode === "search" ? (
        <Image
          className={`${styles.image} ${styles.arrow}`}
          src={"/icon/arrow-left.svg"}
          width={20}
          height={20}
          alt=""
          onClick={() => {
            router.push("/");
          }}
        />
      ) : null}
      <div className={styles.search}>
        <div className={styles["icon-search"]}>
          <IconSearch width={20} height={20} color="#6f6e77" />
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

        {loading ? (
          <Image src={"/icon/spinner.svg"} width={20} height={20} alt="" />
        ) : mode === "search" && searchWord ? (
          <Image
            className={styles.image}
            src={"/icon/cross.svg"}
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
  );
};
