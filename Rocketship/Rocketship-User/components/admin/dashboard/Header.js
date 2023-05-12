import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../../context/context";
import MobileSidebar from "./MobileSidebar";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logoPic from "../../../public/logo.png";
import { useSession } from "next-auth/react";
import { AiOutlineUser } from "react-icons/ai";

function Header({ email }) {
  // const value = useGlobalContext();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const { data, status } = useSession();
  console.log(data?.user.email);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 70) {
        setBgColor(true);
      } else {
        setBgColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div className="pb-2 h-18">
      <header className="fixed w-full bg-[#ffffff] z-50 drop-shadow-md">
        <div className="xl:max-w-screen-lg mx-auto flex flex-wrap items-center justify-between  py-2  text-black ">
          <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <div className="w-20 mx-5 cursor-pointer ">
                <Image
                  src={logoPic}
                  width={70}
                  height={70}
                  alt="Rocketship Logo"
                />
              </div>
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? (
                <FaBars size={25} className="mr-3" />
              ) : (
                <FaTimes size={25} className="mr-3" />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow justify-center items-center " +
              (navbarOpen ? "flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none text-center text-sm">
              <li className="px-4 border-transparent border-b-4  py-2 font-medium uppercase">
                <Link
                  className="hover:text-[#EF1C24]"
                  href="/"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  HOME
                </Link>
              </li>
              <li className="px-4 border-transparent border-b-4  py-2 font-medium uppercase">
                <Link
                  className="hover:text-[#EF1C24]"
                  href="/dashboard/user/mycourses"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  My Courses
                </Link>
              </li>
              <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
                <button
                  onClick={() => signOut({ redirect: false, callbackUrl: "/" })}
                >
                  Sign Out
                </button>
              </li>
              {/* <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
                  <Link href="/dashboard">Dashboard</Link>
                </li> */}
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineUser />
            <p> {email}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
