import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "How it works", link: "#how-it-works" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Pricing", link: "#pricing" },
    { name: "FAQ", link: "#faq" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/50 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Outer container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Left Logo */}
        <div className="text-2xl font-bold cursor-pointer">
          <span className="text-white">Crypto</span>
          <span className="text-violet-400">Flow</span>
        </div>

        {/* Center Menu items (hidden on mobile) */}
        <ul className="hidden md:flex space-x-10 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Buttons (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-300 hover:text-white">Login</button>
          <button className="bg-violet-400 text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-violet-400/30 transition">
            Buy Now
          </button>
        </div>

        {/* Mobile menu icon */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <ul className="flex flex-col px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="block text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <hr className="border-gray-700 my-2" />
            <button className="text-gray-300 hover:text-white">Login</button>
            <button className="bg-violet-400 text-white w-full py-2 rounded-full mt-2">
              Buy Now
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
