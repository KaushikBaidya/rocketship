import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";
import { Loader } from "../../common/Loader";

SwiperCore.use([Pagination, Autoplay]);

const Institutions = ({ data }) => {
  if (!data) return <Loader />;

  const tmp = data;

  return (
    <section className="min-h-full py-14">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-4xl mx-auto pb-5">
          <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-10 py-2 text-center">
            Our students have earned admissions to these and other top schools
          </h1>
        </div>
        <div className="py-2">
          <div className="xl:max-w-screen-lg mx-auto px-5">
            <Swiper
              slidesPerView="auto"
              spaceBetween={10}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {tmp.map((item) => (
                <SwiperSlide key={item.institutionId}>
                  <div className="grid grid-cols-1 content-center justify-items-center w-full h-56 bg-cover gap-y-10">
                    <div className="h-full grayscale hover:grayscale-0 object-cover">
                      <Image
                        src={item.image}
                        width={200}
                        height={100}
                        alt="university list"
                        className="w-full"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
