import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="h-fit w-full bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="mx-4 flex flex-col items-center justify-between gg:flex-row">
        <div className="flex flex-col">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt=""
            className="max-h-[150px] max-w-[150px]"
          />
          <div className="mx-1 flex justify-center gap-7">
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <WhatsAppIcon />
            </a>
            <a href="">
              <EmailIcon />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1 text-center">
          <button
            className="rounded-full bg-gray-800 p-1 text-white"
            onClick={handleScrollToTop}
          >
            Back to Top
          </button>
          <a
            href=""
            className="duration-800 rounded-full border-2 border-solid border-sky-500 bg-sky-500 p-1 text-white transition ease-in-out hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>

      <p className="text-center">Copyright</p>
    </footer>
  );
};

export default Footer;
