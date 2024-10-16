import React from "react";
import arr from "../images/arrow.png";
import Arrow from "./Arrow";
const Button = ({ text }) => {
  return (
    <>
      <div className="tracking-wider arrbutton button bg-[#031b4e] text-white text-[13px] p-4 h-[6.5vh] flex items-center  cursor-pointer justify-center  rounded-full hover:bg-[#3367c4] focus:outline-none">
        {text}
        <div className="ml-2">
          <Arrow clr="transparent" bg={arr} />
        </div>
      </div>
    </>
  );
};

export default Button;