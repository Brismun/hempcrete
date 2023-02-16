import React, { useState } from "react";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/640x480?text=Image+1",
    "https://via.placeholder.com/640x480?text=Image+2",
    "https://via.placeholder.com/640x480?text=Image+3",
    "https://via.placeholder.com/640x480?text=Image+4",
    "https://via.placeholder.com/640x480?text=Image+5",
  ];
  function prev() {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  }

  function next() {
    setCurrentIndex((currentIndex) =>
      currentIndex === images.length - 1 ? 0 : currentIndex + 1
    );
  }
  return (
    <div className="relative w-full h-screen">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 w-full flex justify-center mb-4">
        <button
          onClick={prev}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-l"
        >
          Prev
        </button>
        <button
          onClick={next}
          className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-r"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallery;
