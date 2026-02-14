import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import Home from "./pages/Home";
import About from "./pages/About";
import Warehouse from "./pages/Warehouse";
import ColdStorage from "./pages/ColdStorage";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true
        }}>
          <Navbar />

          <div className="min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/warehouse" element={<Warehouse />} />
              <Route path="/about/coldstorage" element={<ColdStorage />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
          <WhatsAppButton />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
