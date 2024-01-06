"use client";
import React, { useState } from "react";
import Logo from "@/images/logo.png";
import Image from "next/image";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Skills",
      link: "#skills",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f7f3f2]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image src={Logo} width={200} alt="Logo" />
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${!open && "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul
            className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 
            rtl:space-x-reverse md:mt-0 md:border-0 "
          >
            {links.map((item: any, index: number) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block py-2 px-3 hover:text-[#f8791e] text-[#15295f] md:p-0 font-semibold"
                  aria-current="page"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
