import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      
      const homeSection = document.getElementById("home");
      const homeHeight = homeSection ? homeSection.offsetHeight : 0;

      if (window.scrollY > homeHeight - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToHome}
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-8 right-8 z-50 bg-violet-500 hover:bg-violet-600 text-white p-3 sm:p-4 rounded-full shadow-lg border border-violet-400/40 backdrop-blur-md transition-all duration-300"
      aria-label="Back to Home"
    >
      <FaArrowUp className="text-lg sm:text-xl" />
    </motion.button>
  );
};

export default ScrollToTopButton;
