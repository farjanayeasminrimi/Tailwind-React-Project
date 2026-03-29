import React from "react";

const Link = ({ route }) => {
  return (
    <li className="hover:bg-amber-200 px-3">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
