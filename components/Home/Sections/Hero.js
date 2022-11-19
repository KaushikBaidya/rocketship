import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  const data = [
    { id: 0, img: "/service/3.png" },
    { id: 1, img: "/service/1.png" },
    { id: 2, img: "/service/4.png" },
    { id: 3, img: "/service/2.png" },
  ];
  return (
    <main className="h-[700px] py-20 md:py-0">
      <div className="text-[#211A56] lg:px-24 pt-20 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gray-50 h-[700px]">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2 text-2xl lg:text-5xl font-semibold">
          <div className="lg:mr-16">
            <h1 className="text-center text-4xl lg:text-6xl md:text-left mb-10">
              We will help you with your -{" "}
            </h1>

            <Typewriter
              options={{
                strings: [
                  "Admission Counseling",
                  "Essay Editing",
                  "Financial Planning",
                  "Test Preparation",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
            <div className="hidden md:block">
              <button className="text-lg bg-[#EF1C26] p-4 rounded-full text-white font-semibold my-5">
                Book a Free Consult
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  px-5">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5500,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full mx-auto my-5">
                    <div className="flex items-center justify-center mx-5">
                      <div className="max-w-[500px] h-[300px]">
                        <Image src={item.img} layout="fill" alt="" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <h1></h1>
    </main>
  );
};

export default Hero;
