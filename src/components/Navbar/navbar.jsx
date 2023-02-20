import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className="mx-10">
      <div className="flex items-center justify-between">
        <img
          src="https://loremflickr.com/640/360"
          alt=""
          className="max-h-[150px] max-w-[150px]"
        />
        <div className=" hidden md:block">
          <div className="flex items-center gap-[25px] text-[15px]">
            <a href="" className="hover:underline">
              Home
            </a>

            <a href="">About Us</a>

            <a href="">Gallery</a>

            <a href="">Other Products</a>

            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
