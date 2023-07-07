"use client";

import { useId, useState } from "react";

import styles from "./CheckButton.module.scss";

type rops = {
  label: string;
  isOwnNotes: boolean;
};

export const CheckButton = ({ label, isOwnNotes }: rops) => {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.checkbox}>
        <input
          type="checkbox"
          id={id}
          className={styles["checkbox-input"]}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor={id} className={styles["checkbox-label"]}>
          <span className={styles["checkbox-icon"]}></span>
          <span>{label}</span>
        </label>
      </div>
      {isOwnNotes && checked && (
        // TODO: 削除ロジックは後ほど実装する
        <button type="button" className={styles["delete-button"]}>
          削除
        </button>
      )}
    </div>
  );
};
