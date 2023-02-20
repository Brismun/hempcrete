import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="mx-10">
      <div className="flex items-center justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
          className="max-h-[150px] max-w-[150px]"
        />
        <div className="hidden gg:block">
          <div className="flex items-center gap-[15px] text-[15px]">
            <a
              href=""
              className="duration-450 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Home
            </a>

            <a
              href=""
              className="duration-450 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              About Us
            </a>

            <a
              href=""
              className="duration-450 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Gallery
            </a>

            <a
              href=""
              className="duration-450 rounded-full border-2 border-transparent p-1 transition ease-in-out hover:rounded-full hover:border-2 hover:border-solid hover:border-sky-500 hover:bg-sky-500 hover:text-white"
            >
              Other Products
            </a>

            <a
              href=""
              className="duration-800 rounded-full border-2 border-solid border-sky-500 bg-sky-500 p-[5px] text-white transition ease-in-out hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
