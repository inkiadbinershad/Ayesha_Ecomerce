import React, { createContext, useState } from "react";
import en from "../translations/en.json";
import ar from "../translations/ar.json";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "en" ? "ar" : "en"));
  };

  const t = language === "en" ? en : ar;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
