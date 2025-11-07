import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, Shield,  } from 'lucide-react';
import Heading from '../components/Heading';
import FeaturesGrid from '../components/FeaturesGrid';
import StepsSection from '../components/StepsSection';
import TestimonialSlider from '../components/TestimonialSlider';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Section: React.FC = () => {
  return (
    <>
     <section id="home" className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden text-white bg-gradient-to-br from-[#34374B] via-[#2D3045] to-[#1E2030]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            {/* LEFT SIDE CONTENT */}
            <motion.div
              className="space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Feature Tag */}
              <div className="bg-slate-800 text-purple-300 text-xs sm:text-sm px-4 py-1.5 rounded-full border border-slate-700 inline-flex items-center gap-2 mx-auto lg:mx-0">
                <div>
                  New Feature <span className="text-white">AI-Powered Trading Signals</span>
                </div>
                <span className="text-purple-400 font-semibold">&gt;</span>
              </div>

              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-400 leading-tight max-w-[90%] sm:max-w-[700px] mx-auto lg:mx-0">
                Trade Crypto{' '}
                <span className="text-white block sm:inline">with Confidence & Clarity</span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg font-medium max-w-[90%] sm:max-w-[650px] mx-auto lg:mx-0">
                Experience seamless cryptocurrency trading with real-time analytics,
                AI-powered insights, and zero commission fees.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white font-medium transition-all">
                  Start Trading <span className="inline-block ml-1">➜</span>
                </button>

                <button className="bg-black hover:bg-gray-700 border border-gray-700 px-6 py-3 rounded-full text-white font-medium transition-all">
                  View Demo <span className="inline-block ml-1 rotate-[320deg]">➜</span>
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
                <div>
                  <div className="text-3xl font-bold text-purple-400">$2.5B+</div>
                  <div className="text-sm text-gray-400">Trading Volume</div>
                </div>
                <div className="hidden sm:block h-10 border-l border-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">120K+</div>
                  <div className="text-sm text-gray-400">Active Traders</div>
                </div>
                <div className="hidden sm:block h-10 border-l border-gray-700"></div>
                <div>
                  <div className="text-3xl font-bold text-purple-400">50+</div>
                  <div className="text-sm text-gray-400">Global Markets</div>
                </div>
              </div>
            </motion.div>

          <motion.div
            className="relative flex justify-center mt-12 lg:mt-0 px-4 sm:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Floating Wrapper */}
            <motion.div
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              animate={{ y: [0, -20, 0] }} // Move entire card up and down
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              {/* Main Image */}
              <img
                src="\src\assets\1.avif"
                alt="Crypto trading"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />

              {/* Top Overlay */}
              <motion.div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="relative w-36 sm:w-48 md:w-52 rounded-2xl bg-gradient-to-br from-purple-500/30 via-indigo-500/20 to-transparent backdrop-blur-xl border border-white/20 shadow-xl p-3 sm:p-4 flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 border border-violet-300/40 flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-200/80" />
                  </div>
                  <div>
                    <div className="text-purple-200/70 text-xs sm:text-sm font-medium">
                      Security Level
                    </div>
                    <div className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                      Enterprise
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Overlay */}
              <motion.div
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative w-36 sm:w-48 md:w-52 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 shadow-xl p-3 sm:p-4 flex items-center gap-3">
                  <div className="bg-green-500/20 p-2 sm:p-3 rounded-full border border-green-400/40 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-slate-400 text-xs sm:text-sm font-medium">
                      24h Change
                    </div>
                    <div className="text-green-400 text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                      +12.34%
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          </div>
        </section>


       <section id="features" className="section-bg  text-white w-full overflow-hidden">
            <motion.section
              className="flex flex-col justify-center items-center section-bg text-white px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center w-full max-w-3xl mx-auto px-2"
              >
                <Heading
                  title="Powerful Features"
                  subtitle="CryptoFlow gives you the edge with advanced tools designed for both beginners and professional traders."
                />
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="w-full max-w-6xl mx-auto mt-10 sm:mt-14"
              >
                <FeaturesGrid />
              </motion.div>
            </motion.section>
        </section>

        <section id="how-it-works" className="section-bg text-white w-full overflow-hidden">
          <motion.section
            id="how-it-works-inner"
            className="flex flex-col justify-center items-center min-h-screen px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 section-bg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Heading Animation */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center w-full max-w-3xl mx-auto px-2"
            >
              <Heading
                title="How It Works"
                subtitle="Getting started with CryptoFlow is easy. Follow these simple steps to begin your crypto journey."
              />
            </motion.div>

            {/* Steps Section Animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                },
              }}
              viewport={{ once: true }}
              className="w-full max-w-6xl mx-auto mt-10 sm:mt-14"
            >
              <StepsSection />
            </motion.div>

            {/* Button Animation */}
            <motion.div
              className="flex justify-center items-center mt-10 sm:mt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 15px rgba(139, 92, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="bg-violet-400 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-2xl text-sm sm:text-base transition duration-300"
              >
                Create a Free Account
              </motion.button>
            </motion.div>
          </motion.section>
        </section>

        <section id="testimonials" className="section-bg text-white w-full  flex flex-col justify-center items-center overflow-hidden">
            {/* Outer motion wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 text-center"
            >
              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-8 sm:mb-10"
              >
                <Heading
                  title="What Our Users Say"
                  subtitle="Hear from our community of traders who’ve transformed their crypto experience with CryptoFlow."
                />
              </motion.div>

              {/* Testimonial Slider */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6 sm:mt-10 w-full"
              >
                <TestimonialSlider />
              </motion.div>
            </motion.div>
        </section>

      <section id="pricing" className="section-bg text-white w-full  flex flex-col justify-center items-center overflow-hidden">
      {/* Responsive container */}
      <div className="w-full max-w-8xl px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 py-10 sm:py-16 lg:py-10 text-center">
        
        {/* Animate Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-8 sm:mb-12 lg:mb-16"
        >
          <Heading
            title="Simple, Transparent Pricing"
            subtitle="Choose the plan that best fits your trading needs. All plans include our core platform features."
          />
        </motion.div>

        {/* Animate Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-6 sm:mt-10 lg:mt-16 w-full"
        >
          <PricingSection />
        </motion.div>
      </div>
    </section>

    <section id="faq" className="section-bg text-white w-full flex flex-col justify-center items-center overflow-hidden">
          <div className="w-full max-w-6xl px-4 sm:px-8 md:px-12 lg:px-20 py-10 sm:py-16 text-center -mt-12">
            {/* Animate Heading */}
            <motion.div
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="mb-8 sm:mb-10"
            >
              <Heading
                title="Frequently Asked Questions"
                subtitle="Got questions about CryptoFlow? We've got answers. If you don't see what you're looking for, reach out to our support team."
              />
            </motion.div>

            {/* Animate FAQ Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 sm:mt-12 w-full"
            >
              <FAQSection />
            </motion.div>
          </div>
      </section>


    {/* CTA Section */}
          <section id="cta" className="flex items-center justify-center section-bg text-white p-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-r from-[#1e2230] to-[#1a1d24] rounded-2xl border border-gray-700 shadow-2xl p-10 max-w-3xl text-center"
            >
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold mb-4"
              >
                Ready to revolutionize your{" "}
                <span className="text-violet-400">crypto trading</span>?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-300 mb-8"
              >
                Join thousands of traders who have already upgraded their crypto
                experience with{" "}
                <span className="font-medium text-white">CryptoFlow</span>. Start today
                with zero risk.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row justify-center gap-4 mb-6"
              >
                <button className="flex items-center justify-center bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-violet-500/40">
                  Get Started for Free
                </button>

                <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 transition">
                  Schedule Demo
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm text-gray-400"
              >
                No credit card required. Cancel anytime.
              </motion.p>
            </motion.div>
          </section>

           <footer className="bg-[#0c0d11] text-gray-400 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
              {/* Brand Section */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Crypto<span className="text-violet-400">Flow</span>
                </h2>
                <p className="text-sm mb-4">
                  The most trusted cryptocurrency platform, empowering traders with
                  innovative tools and unparalleled security.
                </p>

              {/* Social Icons */}
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-violet-400">
                  <FaFacebookF />
                </a>
                <a href="#" className="hover:text-violet-400">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:text-violet-400">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:text-violet-400">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="hover:text-violet-400">
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-white font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400">Exchange</a></li>
                <li><a href="#" className="hover:text-violet-400">Wallet</a></li>
                <li><a href="#" className="hover:text-violet-400">API</a></li>
                <li><a href="#" className="hover:text-violet-400">Institutional</a></li>
                <li><a href="#" className="hover:text-violet-400">DeFi Platform</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400">Blog</a></li>
                <li><a href="#" className="hover:text-violet-400">Tutorials</a></li>
                <li><a href="#" className="hover:text-violet-400">Market Data</a></li>
                <li><a href="#" className="hover:text-violet-400">Documentation</a></li>
                <li><a href="#" className="hover:text-violet-400">Help Center</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-violet-400">About</a></li>
                <li><a href="#" className="hover:text-violet-400">Careers</a></li>
                <li><a href="#" className="hover:text-violet-400">Press</a></li>
                <li><a href="#" className="hover:text-violet-400">Legal & Privacy</a></li>
                <li><a href="#" className="hover:text-violet-400">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-gray-500">
            <p>
              © 2025 <span className="text-white">CryptoFlow</span>. All rights reserved. ~ Distributed by{" "}
              <a href="#" className="text-violet-400 hover:underline">Dharani</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-violet-400">Terms of Service</a>
              <a href="#" className="hover:text-violet-400">Privacy Policy</a>
              <a href="#" className="hover:text-violet-400">Cookie Policy</a>
            </div>
          </div>
    </footer>
      <ScrollToTopButton /> 
    </>
  );
};

export default Section;
