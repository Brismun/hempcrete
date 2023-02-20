import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Gallery = () => {
  const slides = [
    {
      url: "https://static.wixstatic.com/media/43628e_79920403aea3434290a9463c1ffd67b8~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_951,h_397,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/43628e_79920403aea3434290a9463c1ffd67b8~mv2_d_5616_3744_s_4_2.jpg",
    },
    {
      url: "https://static.wixstatic.com/media/43628e_e479d849ed5c4cf49af78f9f68ef1b47~mv2_d_5341_3561_s_4_2.jpg/v1/fill/w_951,h_344,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/43628e_e479d849ed5c4cf49af78f9f68ef1b47~mv2_d_5341_3561_s_4_2.jpg",
    },
    {
      url: "https://static.wixstatic.com/media/43628e_9618359fcd1c4770bf40cd19cfc5cfc1~mv2_d_3635_5452_s_4_2.jpg/v1/fill/w_951,h_270,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/43628e_9618359fcd1c4770bf40cd19cfc5cfc1~mv2_d_3635_5452_s_4_2.jpg",
    },

    {
      url: "https://static.wixstatic.com/media/43628e_b8882e4c90cc458e8e4f8cf699a132d1~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_957,h_367,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/43628e_b8882e4c90cc458e8e4f8cf699a132d1~mv2_d_6000_4000_s_4_2.jpg",
    },
    {
      url: "https://static.wixstatic.com/media/43628e_b88e5bdd03c54aecb062e5ba856c4bed~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1902,h_481,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/43628e_b88e5bdd03c54aecb062e5ba856c4bed~mv2_d_5616_3744_s_4_2.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="group relative mx-auto h-[780px] w-full max-w-[1400px] py-16 px-4">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="h-full w-full rounded-2xl bg-cover bg-center duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white group-hover:block">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
