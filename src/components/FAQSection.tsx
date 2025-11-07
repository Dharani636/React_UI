import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How secure is CryptoFlow?",
    answer:
      "CryptoFlow employs bank-level security measures including 256-bit encryption, cold storage for 95% of assets, two-factor authentication, and regular security audits. Our platform has never been compromised and we maintain a comprehensive insurance policy to protect user funds.",
  },
  {
    question: "What cryptocurrencies can I trade on CryptoFlow?",
    answer:
      "CryptoFlow supports trading of over 50 cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Cardano (ADA), Ripple (XRP), and many more. We regularly add new cryptocurrencies based on market trends and user demand.",
  },
  {
    question: "What are the fees for using CryptoFlow?",
    answer:
      "Our fee structure is transparent and competitive. Basic accounts pay 0.25% per trade, Pro accounts pay 0.1%, and Enterprise accounts pay no trading fees. There are no hidden fees, and we don't charge for deposits. Withdrawal fees vary by cryptocurrency to cover network costs.",
  },
  {
    question: "How do I deposit funds into my CryptoFlow account?",
    answer:
      "You can deposit funds via bank transfer, credit/debit card, or by transferring cryptocurrency from another wallet. Bank transfers typically process within 1-3 business days, while card payments and crypto transfers are nearly instant.",
  },
  {
    question: "Is CryptoFlow available in my country?",
    answer:
      "CryptoFlow is available in most countries worldwide. Please check our supported countries list for specific availability.",
  },
  {
    question: "How do I get started with CryptoFlow?",
    answer:
      "Getting started is simple. Create an account, complete the verification process (which typically takes less than 10 minutes), deposit funds using your preferred method, and you're ready to start trading. Our intuitive interface is designed to make cryptocurrency trading accessible for beginners while offering powerful tools for experienced traders.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full text-white flex flex-col justify-center items-center px-5 py-16">
      <div className="max-w-3xl w-full">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`mb-4 border border-gray-800 rounded-lg bg-gradient-to-r from-[#11111a] to-[#141420] transition-all duration-300 ${
                isOpen ? "shadow-[0_0_15px_rgba(124,58,237,0.3)]" : ""
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-base sm:text-lg font-medium text-gray-200 hover:text-white transition"
              >
                <span
                  className={`transition-colors ${
                    isOpen ? "text-purple-400" : "text-gray-200"
                  }`}
                >
                  {faq.question}
                </span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-40 px-5 pb-5" : "max-h-0 px-5 pb-0"
                }`}
              >
                <p className="text-gray-400 text-sm leading-relaxed text-left">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQSection;
