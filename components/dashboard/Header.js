import React from "react";
import { AiOutlineBars } from "react-icons/ai";

function Header() {
  return (
    <div className="flex flex-wrap h-20 bg-purple-100 lg:ml-[200px]">
      <div className="flex justify-evenly items-center ">
        <div className="ml-[40px] ">
          <h2 className="text-xl">
            Hello, <span>Admin</span>
          </h2>
          <p>welcome to the board.</p>
        </div>
        <div className="absolute right-5 block lg:hidden">
          <AiOutlineBars size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
