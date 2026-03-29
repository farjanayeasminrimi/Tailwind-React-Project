import React from "react";
import Pricing from "../Pricing/Pricing";

const pricingData = [
  {
    id: 1,
    name: "Basic",
    price: "$19",
    duration: "/month",
    features: ["1 Website", "Basic Support", "Limited Access", "Community Support"],
    isPopular: false,
    buttonText: "Get Started",
  },
  {
    id: 2,
    name: "Standard",
    price: "$49",
    duration: "/month",
    features: ["5 Websites", "Priority Support", "Full Access", "Analytics Dashboard"],
    isPopular: true,
    buttonText: "Choose Plan",
  },
  {
    id: 3,
    name: "Premium",
    price: "$99",
    duration: "/month",
    features: [
      "Unlimited Websites",
      "24/7 Dedicated Support",
      "Advanced Features",
      "Custom Integrations",
    ],
    isPopular: false,
    buttonText: "Go Premium",
  },
];
const Pricings = () => {
  return (
    <div className="my-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pricingData.map((pricing) => (
        <Pricing key={pricing.id} pricing={pricing}></Pricing>
      ))}
    </div>
  );
};

export default Pricings;
