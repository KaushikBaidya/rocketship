import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="flex flex-wrap h-20 bg-purple-100 ml-[200px] ">
      <div className="flex justify-evenly items-center ">
        <div className="ml-[40px] ">
          <h2 className="text-xl">
            Hello, <span>Admin</span>
          </h2>
          <p>welcome to the board.</p>
        </div>
        <div className="absolute right-5 ">
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
