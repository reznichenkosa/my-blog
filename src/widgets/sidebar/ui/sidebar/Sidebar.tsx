import { useState } from "react";
import { Button } from "shared/ui/button";
import styles from "./Sidebar.module.scss";
import cn from "classnames";
import { ThemeSwitcher } from "features/theme-switcher";
import BarIcon from "shared/assets/icons/bar.svg";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggle = () => {
    setIsCollapsed((prevValue) => !prevValue);
  };

  return (
    <div className={cn(styles.wrapper, { [styles.collapsed]: isCollapsed })}>
      <div className={styles.content}>
        <Button onClick={onToggle}>
          <BarIcon className={styles.icon} />
        </Button>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
