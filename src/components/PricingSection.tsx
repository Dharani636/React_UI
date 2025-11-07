import React, { useState } from "react";

interface Plan {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  highlight?: boolean;
}

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans: Plan[] = [
    {
      title: "Basic",
      price: isAnnual ? "$0" : "$0",
      period: "/month",
      description: "Perfect for beginners getting started with crypto trading.",
      features: [
        "Access to 20+ cryptocurrencies",
        "Basic charting tools",
        "Market data with 15-min delay",
        "Email support",
        "Mobile app access",
      ],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: isAnnual ? "$15" : "$19",
      period: "/month",
      description: "Designed for active traders seeking advanced tools.",
      features: [
        "Access to 50+ cryptocurrencies",
        "Advanced charting tools",
        "Real-time market data",
        "Priority email support",
        "Reduced trading fees (0.1%)",
        "API access",
        "Portfolio analytics",
      ],
      buttonText: "Start 7-Day Free Trial",
      highlight: true,
    },
    {
      title: "Enterprise",
      price: isAnnual ? "$39" : "$49",
      period: "/month",
      description: "Comprehensive solution for professional traders.",
      features: [
        "Access to all cryptocurrencies",
        "Professional-grade charts",
        "Real-time market data",
        "24/7 dedicated support",
        "Zero trading fees",
        "Advanced API access",
        "Institutional-grade security",
        "Custom reporting",
        "Team management",
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section id="pricing" className="min-h-screen text-white py-20">
      <div className="flex flex-col items-center">
        {/* Toggle Switch */}
        <div className="flex items-center space-x-2 mb-12 bg-gray-800 p-1 rounded-full">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              !isAnnual ? "bg-violet-500 text-white" : "text-gray-300"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              isAnnual ? "bg-violet-500 text-white" : "text-gray-300"
            }`}
          >
            Annual
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-16 lg:px-32 w-full max-w-9xl">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={`relative rounded-2xl border border-gray-700 bg-[#1B1B24] overflow-hidden transition-all duration-300 ${
                plan.highlight
                  ? "border-violet-500 shadow-[0_0_25px_-5px_rgba(167,139,250,0.4)]"
                  : "hover:shadow-[0_0_15px_-5px_rgba(167,139,250,0.2)]"
              }`}
            >
              {/* Top Bar for Most Popular */}
              {plan.highlight && (
                <div className="w-full bg-[#A78BFA] text-center py-2 text-sm font-semibold text-white rounded-t-2xl">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-lg font-semibold mb-2">{plan.title}</h3>

                <div className="flex items-end mb-2">
                  <p className="text-4xl font-bold">{plan.price}</p>
                  <p className="text-sm text-gray-400 ml-1 mb-1">
                    {plan.period}
                  </p>
                </div>

                {/* Description (softer color, limited width) */}
                <p className="text-[#A1A1AA] text-[15px] leading-relaxed mb-6 max-w-xs">
                  {plan.description}
                </p>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? "bg-[#A78BFA] hover:bg-violet-500 text-white"
                      : "bg-[#2E2E3D] hover:bg-[#3A3A4B] text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>

                {/* Feature List */}
                <div className="mt-6">
                  <p className="text-sm font-medium mb-3 text-gray-200 text-left">
                    What’s included:
                  </p>
                  <ul className="space-y-1.5 text-gray-300 text-[15px]">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 leading-relaxed"
                      >
                        <span className="text-[#A78BFA] text-lg mt-[2px]">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
