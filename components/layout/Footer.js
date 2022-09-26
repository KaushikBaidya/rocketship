import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiPhoneCall,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../public/logo.png";

const Footer = () => {
  return (
    <footer className="mt-10 border-t">
      <div className="w-full grid grid-cols-1 justify-items-center mt-10 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-2 py-2 mt-2">
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <Link href="/">
                <div className="px-5">
                  <Image src={logoPic} width={100} height={100} alt="" />
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-wrap gap-4 justify-center py-3">
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <a href="#f">
                  <FiFacebook size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <a href="#f">
                  <FiTwitter size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <a href="#f">
                  <FiYoutube size={26} />
                </a>
              </div>
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <a href="#f">
                  <FiLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-2xl lg:text-3xl text-[#EF1C26] font-semibold  text-center px-5 mt-2 mb-4">
              Explore
            </p>
            <p className="text-sm lg:text-lg text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3">
              <FiMapPin />
              <span className="text-lg text-gray-700">USA</span>
            </p>
            <p className="text-sm lg:text-lg text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3">
              <FiMail />
              <span className="text-lg text-gray-700">info@rocketship.com</span>
            </p>
            <p className="text-sm lg:text-lg text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3">
              <FiPhoneCall />
              <span className="text-lg text-gray-700">646-861-8089</span>
            </p>
          </div>

          <div>
            <p className="text-2xl text-[#EF1C26] font-semibold  text-center px-5 mt-2 mb-4">
              Quick Links
            </p>
            <div className="text-[#211A56] text-lg grid grid-cols-1 justify-items-center">
              <p className="hover:text-[#EF1C26]">
                <Link href="#seeHero">
                  <a>Home</a>
                </Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="#seeHero">
                  <a>About</a>
                </Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="#seeHero">
                  <a>Services</a>
                </Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="#seeHero">
                  <a>Blogs</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3 lg:my-11 justify-around">
        <p className="uppercase font-bold text-[#2A474F] text-center">
          ©{new Date().getFullYear()}
          <span className="ml-2">Rocketship All rights reserved</span>
        </p>

        <p className="text-uppercase text-[#182b31] mb-1">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
