import React from "react";
import { ArrowRight } from "lucide-react";

const CryptoCTA: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a1d24] to-[#0d0f14] text-white p-6">
      <div className="bg-gradient-to-r from-[#1e2230] to-[#1a1d24] rounded-2xl border border-gray-700 shadow-2xl p-10 max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to revolutionize your{" "}
          <span className="text-violet-400">crypto trading</span>?
        </h2>

        <p className="text-gray-300 mb-8">
          Join thousands of traders who have already upgraded their crypto experience with{" "}
          <span className="font-medium text-white">CryptoFlow</span>. Start today with zero risk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="flex items-center justify-center bg-violet-500 hover:bg-violet-600 text-white px-6 py-3 rounded-lg font-medium transition shadow-lg hover:shadow-violet-500/40">
            Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium border border-gray-700 transition">
            Schedule Demo
          </button>
        </div>

        <p className="text-sm text-gray-400">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default CryptoCTA;
