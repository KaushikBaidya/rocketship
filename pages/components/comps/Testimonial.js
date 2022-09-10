import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const Testimonial = () => {
  const data = [
    {
      id: "1",
      img: "/student1.jpg",
      name: "Rebeca Jones",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "2",
      img: "/student2.jpg",
      name: "Kyle Rodrigez",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
    {
      id: "2",
      img: "/student3.jpg",
      name: "Jenefer",
      quote:
        "I had no idea how to get the whole process started and rocketship mentors were great when it came to helping me leverage my sporting and academic credentials and shaping my essay.",
    },
  ];
  console.log(data);
  return (
    <section>
      <div className="w-full grid grid-cols-1 justify-items-center content-center my-14">
        <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
          Testimonials
        </h2>
        <FaQuoteRight className="text-3xl text-[#EF1C26] font-bold my-3" />
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="w-[250px] md:w-[500px] lg:w-[1000px] flex flex-col items-center mx-auto my-5">
                    <div className="rounded-full overflow-hidden m-3">
                      <Image
                        src={item.img}
                        width={100}
                        height={100}
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <h3 className="text-xl lg:text-3xl text-gray-800 font-bold my-3 mx-5">
                      {item.name}
                    </h3>
                    <div className="w-20 h-1 bg-red-500"></div>
                    <br />
                    <p className="text-base lg:text-xl text-gray-700 text-center my-3 mx-2">
                      {item.quote}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
