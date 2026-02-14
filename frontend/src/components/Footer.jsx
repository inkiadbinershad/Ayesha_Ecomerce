import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-500 to-orange-400 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold mb-4">Ayesha Ecomerce</h3>
          <p>
            Providing premium quality food storage and warehouse solutions
            with modern infrastructure.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <p>Email: info@ayeshaecomerce.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Location: Dubai, UAE</p>
        </div>

      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2026 Ayesha Ecomerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
