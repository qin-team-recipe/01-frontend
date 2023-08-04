"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import { IconSearch } from "../Icon";
import styles from "./SearchInput.module.scss";

export const SearchInput: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryWord = searchParams.get("q");
  const path = usePathname();
  const isSearchPage = path.startsWith("/search/");
  const target = path.startsWith("/search/recipe") ? "recipe" : "chef";

  const decodeQueryWord = queryWord ? decodeURIComponent(queryWord) : "";
  const [searchWord, setSearchWord] = useState(decodeQueryWord ?? "");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (decodeQueryWord === searchWord) {
      return;
    }

    const delaySearch = setTimeout(() => {
      setLoading(false);
      if (searchWord) {
        // urlのクエリパラメータの表示もエンコードしたいため、encodeURIComponentを二重にする
        // エンコードすることによりNext.jsのバグを回避
        const encode = encodeURIComponent(encodeURIComponent(searchWord));
        if (isSearchPage) {
          router.push(`search/${target}?q=${encode}`);
        } else {
          router.push(`search/recipe?q=${encode}`);
        }
      } else {
        if (isSearchPage) {
          router.replace(`search/${target}`);
        }
        setSearchWord("");
      }
    }, 1200);

    return () => {
      clearTimeout(delaySearch);
    };
  }, [decodeQueryWord, searchWord, router, isSearchPage, target]);

  const handleSearchWord = (e: ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearchWord(e.target.value);
  };

  const handleClose = () => {
    inputRef.current?.focus();
    router.replace(`search/${target}`);
    setSearchWord("");
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
                handleClose();
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};
