import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";
import Testimonial from "./Testimonial";

SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  const data = [
    { id: 0, img: "/essay.svg" },
    { id: 1, img: "/finance.svg" },
    { id: 2, img: "/teacher.svg" },
    { id: 3, img: "/test.svg" },
  ];
  return (
    <main className="">
      <div className="text-[#211A56] lg:px-24 py-28 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gray-50 h-[700px]">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2 text-5xl font-bold ">
          <div>
            <h1 className="text-left">
              We will help you with your -{" "}
              <Typewriter
                options={{
                  strings: [
                    "Admissions Counseling",
                    "Essay Editing",
                    "Financial Planning",
                    "Test Preparation",
                  ],
                  autoStart: true,
                  loop: true,
                  skipAddStyles: true,
                }}
              />
            </h1>
          </div>

          <button className="text-lg bg-[#EF1C26] p-4 rounded-full text-white font-semibold">
            Book a Free Consult
          </button>
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-[450px] mx-auto my-5">
                    <div className="rounded-full overflow-hidden m-3">
                      <Image
                        src={item.img}
                        width={500}
                        height={500}
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Hero;
