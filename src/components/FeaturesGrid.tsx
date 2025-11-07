import React from "react";
import { Shield, Zap, LineChart, Lock, Bell, PieChart } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
    title: "Real-time Analytics",
    description:
      "Monitor market movements with advanced charts and indicators updated in real-time.",
  },
  {
    icon: <Lock className="w-6 h-6 text-purple-400" />,
    title: "Bank-level Security",
    description:
      "Your assets are protected with military-grade encryption and multi-factor authentication.",
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-400" />,
    title: "Instant Execution",
    description:
      "Execute trades in milliseconds with our high-performance trading engine.",
  },
  {
    icon: <PieChart className="w-6 h-6 text-purple-400" />,
    title: "Smart Portfolio",
    description:
      "Optimize your crypto holdings with AI-powered portfolio suggestions.",
  },
  {
    icon: <Bell className="w-6 h-6 text-purple-400" />,
    title: "Price Alerts",
    description:
      "Never miss an opportunity with customizable price alerts and notifications.",
  },
  {
    icon: <Shield className="w-6 h-6 text-purple-400" />,
    title: "Cold Storage",
    description:
      "Majority of assets stored in offline cold wallets for maximum security.",
  },
];

const FeaturesGrid: React.FC = () => {
  return (
    <section className="text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 bg-[#16191f] border border-gray-800 rounded-2xl p-6 hover:bg-[#1d2128] transition-all duration-300 shadow-lg shadow-black/10"
          >
            <div className="p-2 bg-purple-500/10 rounded-lg w-fit">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesGrid;
