import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/logo.png";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto text-center text-sm">
            <li className="px-4 border-transparent border-b-4  py-2 font-medium uppercase">
              <Link
                className="hover:text-[#EF1C24]"
                href="/"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                HOME
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
              <Link
                className="hover:text-[#EF1C24]"
                href="/ourservice"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Our Services
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
              <Link
                className="hover:text-[#EF1C24]"
                href="/aboutus"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                About Us
              </Link>
            </li>

            {/* <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
              <Link
                className="hover:text-[#EF1C24]"
                href="/blogs"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Blogs
              </Link>
            </li> */}
            <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
              <Link
                className="hover:text-[#EF1C24]"
                href="/courses"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                Courses
              </Link>
            </li>

            {data?.user?.email ? (
              <>
                <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
                  <button
                    onClick={() =>
                      signOut({ redirect: false, callbackUrl: "/" })
                    }
                  >
                    Sign Out
                  </button>
                </li>
                <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <li className="px-4 border-transparent border-b-4 py-2 font-medium uppercase">
                <Link
                  className="hover:text-[#EF1C24]"
                  href="/login"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Sign In
                </Link>
              </li>
            )}
            {/* <li className="px-4 border-transparent border-b-4 hover:border-[#EF1C24] py-2 font-medium uppercase">
              <Link href="/Contact">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Contact</a>
              </Link>
            </li> */}
            <li className="px-4 py-2 bg-red-600 font-medium mx-2 rounded-tl-3xl rounded-br-3xl hover:bg-[#f13841] text-white text-center">
              <a
                href="https://calendly.com/rocketshipeducation"
                target="_blank"
                onClick={() => setNavbarOpen(!navbarOpen)}
                rel="noreferrer"
              >
                Book A Free Consult
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
