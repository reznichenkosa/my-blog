import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";
import styles from "./AppLink.module.scss";

interface AppLinkProps extends LinkProps {}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ children, to, ...otherProps }) => {
  return (
    <Link {...otherProps} to={to} className={styles.link}>
      {children}
    </Link>
  );
};