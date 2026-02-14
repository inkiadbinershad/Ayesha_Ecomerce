import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProductCard = ({ name, description, image }) => {
  const { theme } = useContext(ThemeContext);

  const darkCard =
    "bg-gradient-to-r from-sky-500 to-blue-600 text-white";

  const lightCard =
    "bg-white text-gray-800";

  return (
    <div
      className={`rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 overflow-hidden ${
        theme === "dark" ? darkCard : lightCard
      }`}
    >
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
