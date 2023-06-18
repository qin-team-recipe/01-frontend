"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { SearchInput } from "../../../components/SearchInput";
import styles from "../../top.module.scss";

const Page = () => {
  const router = useRouter();
  const params = useSearchParams();
  const queryWord = params.get("q");

  const handleKeyword = (keyword: string) => {
    if (keyword) {
      router.push(`/search/recipe?q=${keyword}`);
    } else {
      router.push(`/search/recipe`);
    }
  };

  return (
    <main>
      <div className={styles["search-input"]}>
        <SearchInput
          mode="search"
          queryWord={queryWord}
          handleKeyword={handleKeyword}
        />
      </div>
    </main>
  );
};

export default Page;
