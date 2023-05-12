import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import SwiperCore from "swiper";
import { Loader } from "../../common/Loader";

import feedback from "../../../public/gallery/feedback.png";
import Link from "next/link";

SwiperCore.use([Pagination, Autoplay]);

const StudentsTestimonials = ({ data }) => {
  if (!data) return <Loader />;

  const tmp = data;
  return (
    <main className="bg-[#211A55] px-5 mt-10 ">
      <div className="xl:max-w-screen-lg mx-auto md:py-12 py-9 px-4">
        <div className=" grid grid-cols-1 lg:grid-cols-2 md:space-x-4">
          <div className="flex justify-center items-center">
            <Image
              src={feedback}
              alt="Img of Glass bottle"
              className="hidden md:block"
              width={450}
              height={400}
            />
          </div>
          <div className="w-full">
            <h2 className="font-semibold text-xl lg:text-2xl text-white text-center mb-5">
              What happy students and parents say about us
            </h2>
            <div className="w-full">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 5000,
                }}
              >
                {tmp.map((item) => {
                  return (
                    <SwiperSlide key={item.testimonialId}>
                      <div className="w-full flex flex-col mx-auto my-2 bg-white rounded-tl-3xl rounded-br-3xl">
                        <p className="text-sm text-gray-700 m-5">
                          {item.description}
                        </p>
                        <h3 className="text-lg text-[#221a55] font-bold mx-5 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 mx-5 mb-5">
                          {item.designation}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <Link href="/contactus">
              <button className="px-10 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentsTestimonials;
