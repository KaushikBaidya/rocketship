import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

const Hero = () => {
  const data = [
    { id: 0, img: "/service/3.png" },
    { id: 1, img: "/service/1.png" },
    { id: 2, img: "/service/4.png" },
    { id: 3, img: "/service/2.png" },
  ];
  return (
    <main className="h-[700px] py-28">
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
