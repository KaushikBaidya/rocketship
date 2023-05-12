import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import SwiperCore from "swiper";

SwiperCore.use([Pagination, Autoplay]);

const KeyToSuccess = () => {
  return (
    <div className="xl:max-w-screen-lg mx-auto py-12 px-5">
      <h2 className="lg:text-3xl font-semibold text-2xl">
        Standing Out is the Key to Success
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 md:space-x-12 md:mt-16 mt-8">
        <div className="w-full">
          <div className="my-5">
            <h3 className="text-xl lg:text-2xl font-semibold ">
              Challenges faced by High School Students
            </h3>
            <p className="text-base mt-2">
              At elite institutes, admission officers are not just looking for
              good grades and test scores. What truly matters is how you stand
              out and that is a major challenge that students face in the
              admission process. Admission officers look for students who can
              contribute to the institute and the cohort itself.
            </p>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">
              How Rocketship Education Students Succeed
            </h3>
            <p className="text-base mt-2">
              Rocketship Education helps Bangladeshi students develop a college
              application that will help them get noticed. Through our
              personalized counselling and college essay writing, we assist
              students position themselves as unique and strong applicants to
              top institutes.
            </p>
          </div>
        </div>

        <div className="w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
          >
            <SwiperSlide>
              <div className="w-3/4 mx-auto">
                <div className="bg-gray-700 text-white rounded-xl">
                  <p className="text-lg p-5 ">
                    “ At elite institutes, admission officers are not just
                    looking for good grades and test scores. What truly matters
                    is how you stand out and that is a major challenge that
                    students face in the admission process. Admission officers
                    look for students who can contribute to the institute and
                    the cohort itself. ”
                  </p>
                </div>
                <div className="text-center my-5">
                  <p className="text-lg font-semibold">Alex Ferguson</p>
                  <p className="text-base">VC of university</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KeyToSuccess;
