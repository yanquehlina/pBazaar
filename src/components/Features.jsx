import { ShieldCheck, ShoppingCart, Truck } from "lucide-react";

const features = [
  {
    icon: <ShoppingCart className="w-12 h-12 text-[#F39C12]" />,
    title: "Wide Range of Products",
    description: "Find everything you need in one place.",
  },
  {
    icon: <Truck className="w-12 h-12 text-[#F39C12]" />,
    title: "Fast Delivery",
    description: "Quick and reliable shipping to your doorstep.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-[#F39C12]" />,
    title: "Secure Payments",
    description: "Your transactions are safe with us.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#2C3E50]">Why Shop With Us?</h2>
        <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0 md:space-x-10 justify-center items-center">
          {features.map((feature, index) => (
            <div key={index} className="text-center max-w-xs">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-[#34495E]">{feature.title}</h3>
              <p className="text-[#7F8C8D]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
