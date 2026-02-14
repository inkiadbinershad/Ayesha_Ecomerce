import React, { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
  const { t } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);

  window.onscroll = () => {
    setScrolled(window.scrollY > 50);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-red-600 shadow-lg" : "bg-transparent"} text-white`}>
      <div className={`max-w-7xl mx-auto flex justify-between items-center py-4 px-6`}>
        <div className="flex gap-6 font-bold text-lg">
          <Link to="/">{t.home}</Link>
          <Link to="/about">{t.about}</Link>
          <Link to="/products">{t.products}</Link>
          <Link to="/contact">{t.contact}</Link>
        </div>
        <div className="flex gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
