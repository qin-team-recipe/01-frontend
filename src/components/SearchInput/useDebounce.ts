"use client";

import { useEffect, useState } from "react";

export default function useDebounce(word: string, delay: number) {
  const [debounceWord, setDebounceWord] = useState<string>(word);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceWord(word);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [word, delay]);

  return { debounceWord };
}
