import React from "react";
import Gallery from "./components/Gallery/gallery";
import { BeakerIcon } from "@heroicons/react/24/solid";

const App = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen min-w-full	">
      <Gallery />
    </div>
=======
    <ThemeProvider theme={theme}>
      <div className="min-h-screen min-w-full	">
        <div className="flex items-center justify-center min-h-screen">
          <BeakerIcon className="h-6 w-6 text-blue-500" />
          <h1 className="text-xl">Center TEST</h1>
          <h1>dogKing</h1>
        </div>
      </div>
    </ThemeProvider>
>>>>>>> 3d1883838e26241ed775fad3c5cb6c944559c36c
  );
};

export default App;
