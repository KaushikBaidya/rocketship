import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/logo.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [bgColor, setBgColor] = useState(false);

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
    <>
      <div
        className={
          "fixed w-full xl:max-w-screen-3xl mx-auto flex flex-wrap items-center justify-between z-10 py-2 " +
          (bgColor
            ? "bg-[#ffffffeb] backdrop-blur-sm text-black shadow-sm transition duration-200 ease-in"
            : "bg-[#ffffffe7] backdrop-blur-sm text-white lg:bg-transparent ")
        }
      >
        <div className="w-full flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <div className="mx-5">
              <Image src={logoPic} width={280} height={40} alt="" />
            </div>
          </Link>
          <button
            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars size={25} className="mr-3" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? "flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="px-4 border-transparent border-b-4 hover:border-[#5490FF] py-2 text-md font-medium uppercase">
              <Link href="/home">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>HOME</a>
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#5490FF] py-2 text-md font-medium uppercase">
              <Link href="/about">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>About Us</a>
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#5490FF] py-2 text-md font-medium uppercase">
              <Link href="/services">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Services</a>
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#5490FF] py-2 text-md font-medium uppercase">
              <Link href="/blogs">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Blogs</a>
              </Link>
            </li>
            <li className="px-4 border-transparent border-b-4 hover:border-[#5490FF] py-2 text-md font-medium uppercase">
              <Link href="/contact">
                <a onClick={() => setNavbarOpen(!navbarOpen)}>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
