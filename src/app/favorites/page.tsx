import Link from "next/link";

import { IconTablerMenu } from "@/components/Icon";
import { IconAvatar } from "@/components/Icon/IconAvatar";

import styles from "./favorites.module.scss";

export default function Page() {
  return (
    <main>
      <div className={styles.header}>
        <Link href={"settings"}>
          <IconTablerMenu color="#1A1523" />
        </Link>
        <span className={styles["text-favorite"]}>お気に入り</span>
        <Link href={"my-page"}>
          <IconAvatar color="#1A1523" />
        </Link>
      </div>

      <div>Chefs</div>
      <div>New-recipes</div>
      <div>Favorites</div>
    </main>
  );
}
