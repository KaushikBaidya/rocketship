import React from "react";
import Image from "next/image";
// import { useGetData } from "../../../hooks/DataApi";
import { Loader } from "../../common/Loader";
import Link from "next/link";
// import { Error } from "../../common/Error";

const HeroSection = ({ data }) => {
  if (!data) return <Loader />;
  const tmp = data;

  return (
    <section className="bg-white antialiased">
      <div className="lg:bg-sbanner bg-fixed">
        <div className="w-full bg-gradient-to-r from-[#302764fa] to-[#9588e9e8]">
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 lg:grid-cols-2 py-20 z-10">
            <div className="mx-5 text-center lg:text-left">
              <h1 className="text-2xl lg:text-[44px] leading-snug font-medium text-white pb-5 pt-20">
                {tmp.title}
              </h1>
              <h2 className="text-white text-center lg:text-left text-sm lg:text-base font-normal pr-5">
                {tmp.subtitle}
              </h2>
              <div className="mt-10 text-sm font-medium">
                <Link href="/ourservice">
                  <button className="px-9 py-3 hover:text-[#211A56] hover:bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl bg-[#F11b25] text-white my-2">
                    College Admission
                  </button>
                </Link>
                <Link href="/aboutus">
                  <button className="px-10 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center mx-5">
              <div className="max-w-md">
                <Image
                  src={tmp.image}
                  //   src={`https://drive.google.com/uc?export=view&id=${tmp.image1}`}
                  width={550}
                  height={300}
                  alt="USA education"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
