import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-slate-500 max-w-full h-fit min-w-[350px] text-2xl">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 relative p-4">
        <div className="flex flex-col ">
          <img
            src="https://loremflickr.com/640/360"
            alt=""
            className="max-w-[200px]
          max-h-[200px]"
          />
          <div className="flex justify-center items-center gap-4">
            <a href="">FB</a>
            <a href="">WAP</a>
            <a href="">MAIL</a>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center md:mr-4 md:absolute md:left-1/2 md:transform -translate-x-1/2 -translate-y-1/2 md:bottom-4">
          <a href="">Home</a>
          <a href="">AboutUs</a>
          <a href="">Gallery</a>
          <a href="">Other Products</a>
        </div>
        <div>
          <a href="">Contact</a>
        </div>
        <div className="md:absolute md:left-1/2 md:bottom-0 md:transform -translate-x-1/2 -translate-y-1/2 ">
          CopyRight 2022
        </div>
      </div>
    </footer>
  );
};

export default Footer;
