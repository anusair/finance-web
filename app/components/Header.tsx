"use client";

import React, { useState } from "react";
import { NavHeader } from "../utils/data";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <header
      className="text-white flex justify-between items-center
      h-24 max-w-[1240px] mx-auto px-4"
    >
      <h1 className="w-full text-3xl font-bold text-maincolor">REACT.</h1>
      <ul className="hidden md:flex">
        {NavHeader.map((item, index) => (
          <li key={index} className="p-4">
            {item}
          </li>
        ))}
      </ul>
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {nav && (
      <div
        className="fixed md:hidden left-0 top-0 w-[60%] h-full
       border-r border-r-gray-900 bg-[#000300]
       ease-in-out duration-500"
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT.</h1>

          <ul className="pt-4 uppercase">
            {NavHeader.map((item, index) => (
              <li key={index} className="p-4 border-b border-gray-600">
                {item}
              </li>
            ))}
          </ul>
      </div>
      )}
    </header>
  );
}

export default Header;
