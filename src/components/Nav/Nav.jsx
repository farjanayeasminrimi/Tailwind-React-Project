import { Menu } from "lucide-react";
import React from "react";

const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About Us",
    path: "/about",
  },
  {
    id: 3,
    name: "Contact Us",
    path: "/contact",
  },
  {
    id: 4,
    name: "Gallery",
    path: "/gallery",
  },
];
const Nav = () => {
  return (
    <nav className="px-6 py-3 flex justify-between items-center">
      <span className="flex gap-3 justify-center items-center">
        <Menu className="inline-block md:hidden" />
        <h1 className="text-2xl">Nav</h1>
      </span>
      <ul className="md:flex hidden">
        {navItems.map((item) => (
          <li key={item.id} className="ml-4">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
      <button className="btn">Sign Up</button>
    </nav>
  );
};

export default Nav;
