import { useEffect, useRef, useState } from "react";

export const usePopupWithOutsideClick = () => {
  const [isShow, setIsShow] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // ポップアップ外のクリックイベントを検知してポップアップを閉じる
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return { popupRef, isShow, setIsShow };
};
