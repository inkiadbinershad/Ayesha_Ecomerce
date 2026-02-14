import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded bg-orange-500 hover:bg-orange-600 transition"
    >
      {language === "en" ? "AR" : "EN"}
    </button>
  );
};

export default LanguageToggle;
