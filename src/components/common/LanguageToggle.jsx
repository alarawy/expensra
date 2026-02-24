import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="cursor-pointer text-accent font-black"
    >
      {i18n.language === "ar" ? "EN" : "AR"}
    </button>
  );
};

export default LanguageToggle;
