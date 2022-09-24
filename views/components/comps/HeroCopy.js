import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
// import SwiperCore from "swiper";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

// SwiperCore.use([Pagination, Autoplay]);

const Hero = () => {
  const data = [
    { id: 0, img: "/service/3.png" },
    { id: 1, img: "/service/1.png" },
    { id: 2, img: "/service/4.png" },
    { id: 3, img: "/service/2.png" },
  ];
  return (
    <main className="h-[700px] py-28">
      {/* <div className="text-[#211A56] lg:px-24 py-28 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gray-50 h-[700px]">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2 text-5xl font-bold ">
          <div>
            <h1 className="text-left">
              We will help you with your -{" "}
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
              delay: 4000,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-full mx-auto my-5">
                    <div className="rounded overflow-hidden m-3">
                      <Image
                        src={item.img}
                        width={400}
                        height={400}
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
      </div> */}
      <Swiper
        modules={[Pagination, Autoplay]}
        // direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
        }}
      >
        <SwiperSlide>
          <SlideOne />
        </SwiperSlide>
        <SwiperSlide>
          <SlideTwo />
        </SwiperSlide>
        <SwiperSlide>
          <SlideThree />
        </SwiperSlide>
      </Swiper>
    </main>
  );
};

export default Hero;
