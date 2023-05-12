// import Image from "next/image";
import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Instructors = () => {
  return (
    <main className="xl:max-w-screen-xl mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:space-x-8">
        <div className="flex justify-center items-center">
          {/* <Image
              src={feedback}
              alt="Img of Glass bottle"
              className="hidden md:block"
              width={900}
              height={700}
            /> */}
          <div>
            <h1 className="text-2xl font-medium">
              Meet out college admission coaches.
            </h1>
            <p className="text-sm">
              Now this is a story all about how, my life got flipped-turned
              upside down And I would like to take a minute just sit right there
              I will tell you how I became the prince of a town called Bel-Air
            </p>
          </div>
        </div>
        {/* <div className="w-full">
          <div className="w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 5000,
              }}
            >
              {Newtmp.map((item) => {
                return (
                  <SwiperSlide key={item.testimonialId}>
                    <div className="w-full flex flex-col mx-auto my-2 bg-white rounded-tl-3xl rounded-br-3xl">
                      <p className="text-base lg:text-lg text-gray-700 m-5">
                        {item.description}
                      </p>

                      <br />
                      <h3 className="text-lg lg:text-2xl text-[#221a55] font-bold m-5">
                        {item.title}
                      </h3>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <button className="bg-white border-2 border-red-500 rounded-tl-3xl rounded-br-3xl px-5 py-3 w-[150px] mx-auto my-10">
            Contact Us
          </button>
        </div> */}
      </div>
    </main>
  );
};

export default Instructors;
