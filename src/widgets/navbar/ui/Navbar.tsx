import cn from "classnames";
import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/app-link";

export const Navbar = () => {
  return (
    <div className={cn(styles.wrapper)}>
      <div className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
