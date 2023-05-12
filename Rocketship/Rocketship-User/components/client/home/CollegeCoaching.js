import React from "react";
import Image from "next/image";
// import visa from "../../../public/icons/visa.png";
// import hat from "../../../public/icons/hat.png";
// import library from "../../../public/icons/librarry.png";
import Advantage from "../../../public/gallery/advantages.png";
import Link from "next/link";

const CollegeCoaching = () => {
  return (
    <section className="w-full mt-5 lg:mt-20">
      <div className="max-w-5xl mx-auto text-center px-5">
        <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-10 py-10">
          College Admissions Counseling
        </h1>
        <p className="text-base">
          Bengali students sometimes find it challenging to apply to their
          preferred college in the US. But do not worry, Rocketship&#39;s
          admission experts help you navigate the college admissions process
          through personalized and proven solutions.
        </p>
      </div>
      <div className="xl:max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 pb-5 lg:pb-20 mx-auto z-10">
        <div className="w-[90%] bg-transparent bg-center bg-[length:350px] bg-no-repeat mx-auto flex flex-wrap items-center justify-around m-5 gap-2">
          <Image src={Advantage} alt="perks" width={500} height={400} />
        </div>

        <div className="mx-5 lg:mx-10 text-center lg:text-left">
          <h3 className="text-xl lg:text-[22px] font-medium text-[#211A53] py-10 text-left">
            Rocketship will help you succeed in securing admissions by
            thoroughly preparing you
          </h3>
          <p className="text-base lg:text-base text-left lg:pr-5">
            With one-on-one guidance on extracurricular profiles, personal
            statements, course selection, college applications, and unlimited
            support, our team of experts helps students from all over the globe
            earn acceptance into the United States&apos;s most elite colleges,
            including Harvard, MIT, Amherst, Stanford, UCLA, NYU, Johns Hopkins,
            UPenn and more.
          </p>
          <p className="text-base lg:text-base text-left lg:pr-5 mt-5">
            Learn the ropes from our college admissions coaches with the most
            comprehensive curriculum.
          </p>
          <div className="mt-10 text-base font-medium">
            <Link href="/ourservice">
              <button className="px-9 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                Learn More
              </button>
            </Link>
            <Link href="/contactus">
              <button className="px-10 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeCoaching;
