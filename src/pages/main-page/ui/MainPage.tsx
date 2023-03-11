import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("main");
  return <div>{t("mainPage_title")}</div>;
};
export default MainPage;
