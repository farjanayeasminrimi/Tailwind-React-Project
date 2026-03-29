import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "./Link";

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
  const [menu, setMenu] = useState(false);
  const handlerMenu = () => {
    setMenu(!menu);
  };
  const link = navItems.map((route) => <Link key={route.id} route={route}></Link>);
  return (
    <nav className="px-6 py-3 flex justify-between items-center  shadow-md shadow-amber-950">
      <span onClick={handlerMenu} className="flex gap-3 justify-center items-center">
        {menu ? (
          <X className="inline-block md:hidden"></X>
        ) : (
          <Menu className="inline-block md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden bg-amber-50 text-black  py-4 absolute duration-700 ${menu ? "top-16" : "-top-36"} z-10`}
        >
          {link}
        </ul>
        <h1 className="text-2xl">Nav</h1>
      </span>
      <ul className="md:flex gap-4 hidden">
        {link}
        {/* {navItems.map((item) => (
          <li key={item.id} className="ml-4">
            <a href={item.path}>{item.name}</a>
          </li>
        ))} */}
      </ul>
      <button className="btn">Sign Up</button>
    </nav>
  );
};

export default Nav;
