import { FollowButton } from "./FollowButton";

export default {
  component: FollowButton,
};

export const Default = {
  args: {
    initialText: "お気に入りに追加",
    followingText: "お気に入りから削除",
    isFollowing: false,
  },
};
