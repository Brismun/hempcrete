import React from "react";

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="h-fit w-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="mx-4 flex flex-row items-center justify-between sm:flex-col">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
          alt=""
          className="max-h-[150px] max-w-[150px]"
        />
        <div className="mr-12 md:mr-0">Menu</div>

        <div className="flex flex-col text-center">
          <a
            href=""
            className="duration-800 rounded-full border-2 border-solid border-sky-500 bg-sky-500 p-1 text-white transition ease-in-out hover:scale-105"
          >
            Contact
          </a>
          <button
            className="bottom-0 right-0 rounded-md bg-gray-800 p-2 text-white"
            onClick={handleScrollToTop}
          >
            Back to Top
          </button>
        </div>
      </div>
      <p className="text-center">Copyright</p>
    </footer>
  );
};

export default Footer;
