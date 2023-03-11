import cn from "classnames";
import styles from "./Navbar.module.scss";
import { AppLink } from "shared/ui/app-link/AppLink";
import { ThemeSwitcher } from "features/theme-switcher";

export const Navbar = () => {
  return (
    <div className={cn(styles.wrapper)}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to="/">Main</AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  );
};
