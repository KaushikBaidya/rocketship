import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiMapPin,
  FiMail,
  FiPhoneCall,
  FiInstagram,
} from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logoPic from "../../../public/logo.png";

const Footer = () => {
  return (
    <footer className="xl:max-w-screen-lg mx-auto mt-10">
      <div className="w-full grid grid-cols-1 justify-items-center mt-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-12 justify-items-center gap-y-2 py-2 mt-2">
          <div className="col-span-3">
            <div className="grid grid-cols-1 justify-items-center">
              <Link href="/">
                <div className="px-5">
                  <Image
                    src={logoPic}
                    width={80}
                    height={80}
                    alt="rocketship logo"
                  />
                </div>
              </Link>
            </div>
            <div className="w-full flex flex-wrap gap-4 justify-center py-3">
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/rocketshipeducation"
                >
                  <FiFacebook size={26} />
                </Link>
              </div>
              {/* <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <Link href="#f">
                  <FiTwitter size={26} />
                </Link>
              </div> */}
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <Link
                  target="_blank"
                  href="https://www.youtube.com/@rocketshipeducation"
                >
                  <FiYoutube size={26} />
                </Link>
              </div>
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/rocketshipeducation/"
                >
                  <FiInstagram size={26} />
                </Link>
              </div>
              <div className="w-10 h-10 flex bg-[#211A56] justify-center items-center drop-shadow-xl rounded-lg text-[#fff] hover:bg-[#EF1C26]">
                <a
                  href="https://www.linkedin.com/company/rocketship-edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin size={26} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-sm col-span-5 place-content-center">
            <p className="text-2xl lg:text-3xl text-[#EF1C26] font-semibold  text-center px-5 mt-2 mb-4">
              Explore
            </p>
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="col-span-3">
                <p className="text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3">
                  <FiMapPin />
                  <span className="text-gray-700">BANGLADESH</span>
                </p>
                <a
                  href="https://wa.me/8801402461700"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3"
                >
                  <FiPhoneCall />
                  <span className="text-gray-700">+8801402461700</span>
                </a>
                <a
                  href="mailto:info@rocketshipedu.com"
                  className="text-[#EF1C26] font-normal px-5 flex items-center gap-2 my-3"
                >
                  <FiMail />
                  <span className="text-gray-700">info@rocketshipedu.com</span>
                </a>
              </div>
              <div className="col-span-2">
                <p className="text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3">
                  <FiMapPin />
                  <span className=" text-gray-700">USA</span>
                </p>
                <a
                  href="https://wa.me/12135687269"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#EF1C26] font-normal text-center px-5 flex items-center gap-2 my-3"
                >
                  <FiPhoneCall />
                  <span className=" text-gray-700">+1-213-568-7269</span>
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <p className="text-2xl text-[#EF1C26] font-semibold mt-2 mb-4">
              Quick Links
            </p>
            <div className="text-[#211A56] text-base grid grid-cols-1 justify-items-start">
              <p className="hover:text-[#EF1C26]">
                <Link href="/">Home</Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="/aboutus">About</Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="/ourservice">Services</Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="/blogs">Blogs</Link>
              </p>
              <p className="hover:text-[#EF1C26]">
                <Link href="/login">Login</Link>
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
          <Link
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
