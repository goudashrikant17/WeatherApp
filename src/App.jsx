// import axios from "axios";
import LeftBar from "./Components/LeftBar";
// import RightBar from "./Components/RightBar";
// import { useEffect, useState } from "react";

const App = () => {


  

  return (
    <>
      <div className=" bg-[#1F213A] h-screen w-screen flex items-center justify-center">
        <div className=" text-white shadow shadow-yellow-100">
          <LeftBar />
        </div>
        {/* <div className=" px-5 shadow shadow-yellow-50 ">
          <RightBar />
        </div> */}
      </div>
    </>
  );
};

export default App;
