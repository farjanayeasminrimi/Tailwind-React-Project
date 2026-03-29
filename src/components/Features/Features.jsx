import { CircleCheckBig } from "lucide-react";
import React from "react";

const Features = ({ feature }) => {
  return (
    <div className="flex gap-2 items-center mt-2">
      <CircleCheckBig size={15}></CircleCheckBig>
      <p>{feature}</p>
    </div>
  );
};

export default Features;
