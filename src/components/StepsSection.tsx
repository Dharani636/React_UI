import { Download, Wallet, BarChart3 } from "lucide-react";

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    icon: <Download className="w-6 h-6 text-purple-400" />,
    title: "Create Your Account",
    description:
      "Sign up in minutes with our streamlined onboarding process. No complicated forms or lengthy verification.",
  },
  {
    number: "02",
    icon: <Wallet className="w-6 h-6 text-purple-400" />,
    title: "Fund Your Wallet",
    description:
      "Easily deposit crypto or fiat through multiple payment options with zero deposit fees.",
  },
  {
    number: "03",
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    title: "Start Trading",
    description:
      "Access 50+ cryptocurrencies and start trading immediately with intuitive tools and real-time data.",
  },
];

const StepsSection: React.FC = () => {
  return (
    <section className="text-white py-6 px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="relative border border-gray-700 rounded-xl p-8 bg-[#1a1c27] hover:shadow-lg hover:shadow-purple-500/10 transition duration-300"
          >
            <span className="absolute -top-4 left-4 bg-[#1a1c27] border border-purple-500 text-purple-400 text-sm font-semibold px-3 py-1 rounded-md">
              {step.number}
            </span>
            <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-lg bg-[#2b2e3c]">
              {step.icon}
            </div>
            <h3 className="text-lg font-bold mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
