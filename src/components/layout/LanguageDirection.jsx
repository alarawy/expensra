import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageDirection = ({ children }) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const isArabic = i18n.language === "ar";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    document.documentElement.classList.remove("rtl", "ltr");
    document.documentElement.classList.add(isArabic ? "rtl" : "ltr");
  }, [i18n.language]);
  
  return <>{children}</>;
};

export default LanguageDirection;
