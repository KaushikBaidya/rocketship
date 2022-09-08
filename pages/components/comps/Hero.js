import Image from "next/image";
import Typewriter from "typewriter-effect";
import heroPic from "../../../public/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  const data = [
    { id: 0, img: "/essay.svg" },
    { id: 1, img: "/finance.svg" },
  ];
  return (
    <main>
      <div className="text-[#211A56] lg:px-24 py-28 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-white h-[700px]">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2 text-5xl ">
          <h1>
            We will help you with your -{" "}
            <Typewriter
              // style={{ display: "inline" }}
              options={{
                strings: [
                  "College Admissions Counseling",
                  "Essay Editing",
                  "Visa , Scholarship and Financial Planning",
                  "Test Preparation",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </h1>
          <button className="text-lg bg-[#EF1C26] p-4 rounded-full text-white font-semibold">
            Book a Free Consult
          </button>
        </div>
        <div className="hidden w-full md:grid grid-cols-1 content-center justify-items-center p-5 overflow-hidden">
          {/* <Image className="rounded-lg shadow-xl" src={heroPic} alt="" /> */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="mx-auto">
                    <Image
                      src={item.img}
                      width={500}
                      height={500}
                      objectFit="cover"
                      alt=""
                    />
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
