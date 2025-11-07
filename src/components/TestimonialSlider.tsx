import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
  rating?: number;
}

const testimonials: Testimonial[] = [
  {
    text: "As a beginner,I was intimidated by crypto trading until I found CryptoFlow. Their interface and educational resources made it easy to start investing confidently.",
    name: "Sarah Johnson",
    role: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "CryptoFlow has completely transformed my crypto trading experience. The real-time analytics and AI recommendations have significantly improved my returns.",
    name: "Michael Lee",
    role: "Investor",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    text: "The security features on CryptoFlow are unmatched. I feel confident keeping my assets on their platform, and the trading fees are the most competitive I've found.",
    name: "Emily Carter",
    role: "Finance Blogger",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    text: "Their customer support is phenomenal. Any time I've had a question or issue, the team has resolved it quickly. The platform itself is lightning fast and reliable.",
    name: "James Wilson",
    role: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const TestimonialSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // change duration (in ms) if needed
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <section className="flex flex-col items-center justify-center text-white px-6 py-10">
      <div className="relative w-full max-w-3xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-[#1e232b] rounded-2xl p-8 shadow-lg"
          >
            {/* Rating Stars */}
            <div className="flex mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-lg leading-relaxed text-gray-200 text-left font-bold">
              “{testimonials[current].text}”
            </p>

            {/* User Info */}
            <div className="flex items-center mt-6">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full border-2 border-gray-600"
              />
              <div className="ml-4">
                <h4 className="font-semibold text-white">
                  {testimonials[current].name}
                </h4>
                <p className="text-sm text-gray-400">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-6 h-2 bg-violet-400"
                : "w-2 h-2 bg-gray-500 hover:bg-violet-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
