"use client";

import { useState } from "react";

import styles from "./FollowButton.module.scss";

export type Props = {
  initialText: string;
  followingText: string;
  isFollowing: boolean;
};

export const FollowButton = ({
  initialText,
  followingText,
  isFollowing,
}: Props) => {
  const [following, setFollowing] = useState(isFollowing);

  const handleClick = () => {
    setFollowing(!following);
  };

  return (
    <button
      className={`${styles.button} ${
        following ? styles.following : styles.initial
      }`}
      onClick={handleClick}
    >
      {following ? followingText : initialText}
    </button>
  );
};
