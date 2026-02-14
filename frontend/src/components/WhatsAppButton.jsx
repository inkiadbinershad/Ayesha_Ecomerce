import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16 .5C7.5.5.5 7.3.5 15.6c0 2.8.8 5.4 2.3 7.7L.5 31.5l8.4-2.2c2.2 1.2 4.7 1.9 7.1 1.9 8.5 0 15.5-6.8 15.5-15.1S24.5.5 16 .5zm0 27.7c-2.2 0-4.3-.6-6.1-1.7l-.4-.2-5 1.3 1.3-4.9-.3-.5c-1.3-1.9-2-4.1-2-6.5C3.5 9.1 9 3.7 16 3.7S28.5 9.1 28.5 15.7 23 28.2 16 28.2zm7.3-9.5c-.4-.2-2.3-1.1-2.6-1.3-.3-.1-.5-.2-.7.2-.2.3-.8 1.3-1 1.6-.2.3-.4.3-.7.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.7.1-.1.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-1-2.3-.3-.7-.5-.6-.7-.6h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.3 3.3 1.5 3.6c.2.3 2.5 4 6 5.6.8.3 1.5.5 2 .7.8.2 1.6.2 2.2.1.7-.1 2.3-.9 2.6-1.7.3-.8.3-1.5.2-1.7-.1-.2-.3-.3-.6-.4z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
