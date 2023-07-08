"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { IconSearch } from "../Icon";
import styles from "./SearchInput.module.scss";

export const SearchInput: React.FC = () => {
  const router = useRouter();
  const path = usePathname();
  const params = useSearchParams();
  const queryWord = params.get("q");
  const isSearchPage = path.startsWith("/search/");

  const [searchWord, setSearchWord] = useState(queryWord ?? "");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (queryWord === searchWord) {
      return;
    }

    const delaySearch = setTimeout(() => {
      setLoading(false);
      if (searchWord) {
        router.push(`search/recipe?q=${searchWord}`);
      } else {
        if (isSearchPage) {
          router.replace("search/recipe");
        }
        setSearchWord("");
      }
    }, 1200);

    return () => {
      clearTimeout(delaySearch);
    };
  }, [queryWord, searchWord, router, isSearchPage]);

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchWord(e.target.value);
  };

  return (
    <div className={styles.wrap}>
      {isSearchPage ? (
        <div className={styles["icon-left-arrow"]}>
          <Image
            className={styles.pointer}
            src={"/icon/arrow-left.svg"}
            width={20}
            height={20}
            alt=""
            onClick={() => {
              router.push("/");
              setSearchWord("");
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
            handleSearchWord(e);
          }}
          ref={inputRef}
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
                router.replace("search/recipe");
                setSearchWord("");
                inputRef.current?.focus();
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
