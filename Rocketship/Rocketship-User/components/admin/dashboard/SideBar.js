import React from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

// import { useGlobalContext } from "../../../context/context";

import logoPic from "../../../public/logo.png";

import {
  AiFillAppstore,
  AiFillBank,
  AiFillFileAdd,
  AiFillFileText,
  AiFillHome,
  AiOutlineDashboard,
  AiOutlineDeploymentUnit,
  AiOutlineFundView,
  AiOutlineLogin,
  AiOutlineMonitor,
  AiOutlinePieChart,
  AiOutlineRocket,
  AiOutlineSlack,
} from "react-icons/ai";
import { BsGraphDown } from "react-icons/bs";

function SideBar({ action }) {
  const { data } = useSession();
  return (
    <div className="fixed w-[200px] grid grid-rows-twoRows h-screen overflow-hidden bg-dark">
      <div className="grid place-content-center bg-purple-100 shadow-lg">
        <Link href="/dashboard">
          <Image src={logoPic} width={100} height={80} alt="logo" />
        </Link>
      </div>
      {/* <SideMenu /> */}
      <div className="overflow-y-auto">
        <div className="grid grid-cols-1 place-items-left p-2 ">
          {/* <Menu /> */}
          {/* <SideMenu /> */}
          <ul className="mt-5  text-left pl-3 flex flex-col gap-4 font-medium text-gray-100">
            {/* <li onClick={() => action()} className="flex items-center gap-1">
              <AiOutlineRocket className="text-red-500 mb-1" />
              <Link href="/dashboard">Dashboard</Link>
            </li>
            

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillHome className="text-red-500 mb-1" />
              <Link href="/dashboard/course">Add Courses</Link>
            </li>

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineDeploymentUnit className="text-red-500 mb-1" />
              <Link href="/dashboard/service">Service Page</Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlinePieChart className="text-red-500 mb-1" />
              <Link href="/dashboard/aboutus">About Us Page</Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillFileText className="text-red-500 mb-1" />
              <Link href="/dashboard/blog">Blogs</Link>
            </li>

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillAppstore className="text-red-500 mb-1" />
              <Link href="/dashboard/testimonials">Testimonial</Link>
            </li>

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillBank className="text-red-500 mb-1" />
              <Link href="/dashboard/institution">Institutions</Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineSlack className="text-red-500 mb-1" />
              <Link href="/dashboard/consultation">Consultation</Link>
            </li> */}
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiFillHome className="text-red-500 mb-1" />
              <Link href="/">Home Page</Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineMonitor className="text-red-500 mb-1" />
              <Link href="/dashboard/user/mycourses">My Courses</Link>
            </li>
            {/* <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineFundView className="text-red-500 mb-1" />
              <Link href="/dashboard/user/allcourses">All Courses</Link>
            </li> */}

            <li className="flex items-center gap-1 ">
              <AiOutlineLogin className="text-red-500 mb-1" />
              <button
                onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
              >
                Sign Out
              </button>
            </li>
            {/* <Link href="/login" className="flex items-center gap-1 ">
              <AiOutlineLogin className="text-red-500 mb-1" />
              <button onClick={value.signOut}>Sign Out</button>
            </Link> */}
          </ul>
        </div>
      </div>
      <div className="grid place-content-center bg-darker shadow-lg">
        <p className="text-uppercase text-secondary text-sm">Developed By </p>
        <a
          href="https://chimbukit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold"
        >
          <span className="text-success">Chimbuk IT</span>
        </a>
      </div>
    </div>
  );
}
export default SideBar;
