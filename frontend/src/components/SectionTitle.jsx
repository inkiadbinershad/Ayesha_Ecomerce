import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300 animate-gradient">
      {title}
    </h2>
  );
};

export default SectionTitle;
