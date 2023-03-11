import { Button } from "shared/ui/button";
import LangIcon from "shared/assets/icons/lang.svg";
import styles from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const toggleLang = () => {
    const currentLang = i18n.language;
    i18n.changeLanguage(currentLang === "en" ? "ru" : "en");
  };

  return (
    <Button onClick={toggleLang}>
      <div className={styles.language}>
        <LangIcon className={styles.icon} />
        <span>{i18n.language}</span>
      </div>
    </Button>
  );
};
