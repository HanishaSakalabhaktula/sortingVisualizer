import React, { useState } from "react";
import SortingVisualizer from "./sortingVisualizer/SortingVisualizer";
function App() {
  return ( 
    <div className="flex justify-center items-center bg-[#E8F3D6] w-screen h-screen m-0 p-2">
      <SortingVisualizer />
    </div>
  );
}

export default App;
