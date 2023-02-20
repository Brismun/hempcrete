import React from "react";

const Footer = () => {
  return (
    <footer className="h-fit min-w-[270px] max-w-full bg-slate-500 text-2xl">
      <div className="relative flex flex-col items-center gap-4 p-4 md:flex-row md:justify-between">
        <div className="flex flex-col">
          <img
            src="https://loremflickr.com/640/360"
            alt=""
            className="max-h-[200px] max-w-[200px]"
          />
          <div className="flex items-center justify-center gap-4">
            <a href="">FB</a>
            <a href="">WAP</a>
            <a href="">MAIL</a>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:absolute md:left-1/2 md:bottom-0 md:mx-4 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
          <a href="">Home</a>
          <a href="">AboutUs</a>
          <a href="">Gallery</a>
          <a href="">Other Products</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
        <div className="md:absolute md:left-1/2 md:bottom-0 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
          CopyRight 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
