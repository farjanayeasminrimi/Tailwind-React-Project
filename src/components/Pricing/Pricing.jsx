import React from "react";
import Features from "../Features/Features";

const Pricing = ({ pricing }) => {
  const features = pricing.features;
  console.log(pricing);
  return (
    <div className="bg-amber-100 text-black mx-2 rounded-lg">
      {/* Card title */}
      <div className="flex justify-between items-center px-5 pt-5">
        <h2 className="text-2xl font-semibold">{pricing.name}</h2>
        <p className="text-xl">
          {pricing.price}
          {pricing.duration}
        </p>
      </div>
      {/* Card body */}
      <div>
        {/* features */}
        <div className="my-5 px-5">
          {features.map((feature, index) => (
            <Features key={index} feature={feature}></Features>
          ))}
        </div>
        <button className="btn w-full text-center bg-amber-800 border-amber-800">
          {pricing.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Pricing;
