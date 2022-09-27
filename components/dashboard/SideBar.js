import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillDashboard, AiFillFileAdd } from "react-icons/ai";

import logoPic from "../../public/logo.png";

function SideBar() {
  return (
    <div className="fixed w-[200px] h-full bg-gray-100 drop-shadow-md ">
      <div className="flex justify-center p-3">
        <Image src={logoPic} width={80} height={80} objectFit="cover" alt="" />
      </div>
      <div className="p-3 z-[1] ">
        <ul className="mt-5 text-left pl-3 flex flex-col gap-4 text-lg font-semibold ">
          <li className="flex items-center gap-1">
            <AiFillDashboard className="text-red-500 mb-1" />
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </li>
          <li className="flex items-center gap-1 ">
            <AiFillFileAdd className="text-red-500 mb-1" />
            <Link href="/dashboard/post">
              <a>Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
