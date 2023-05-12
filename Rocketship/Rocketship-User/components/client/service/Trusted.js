import React from "react";
import Image from "next/image";
import Quote from "../../../public/icons/Quotation-Mark.png";
import ProgressLine from "../../common/ProgressLine";
const Trusted = () => {
  return (
    <section className="xl:max-w-screen-lg mx-auto py-10">
      <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[36px] text-center px-5">
        Preferred by Students and Families
      </h1>
      <div className="mt-10 mb-5 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div className="flex justify-center items-center">
            <div>
              <h3 className="text-2xl font-medium text-[#211A56]">
                Proven Counselling
              </h3>
              <p className="my-2 text-base text-black">
                Our coaches build your confidence so that students can
                successfully navigate the admission process. Not to mention, our
                sophisticated end-to-end curriculum benefits you and helps you
                get admission into the institute you prefer.
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white drop-shadow-2xl rounded-2xl">
            <div className="p-8 lg:px-12 lg:py-10">
              <h3 className="text-xl font-semibold text-black">
                How students describe their experience with RocketShip
              </h3>
              <p className="my-4 text-sm text-gray-600">
                Working with my college admissions coach has made me confident
                about navigating the college admissions process.
              </p>
              {/* <div className="w-full h-8 bg-[#2B1B7F] rounded-md text-right">
                <p className="p-1 text-white">100%</p>
              </div> */}
              <div className="my-2 overflow-hidden">
                <ProgressLine
                  visualParts={[
                    {
                      percentage: "100%",
                      color: "#5A4EB2",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 mb-5 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div>
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-3xl drop-shadow-2xl justify-evenly">
              <div className="py-2 w-14">
                <Image src={Quote} alt="counseling" />
              </div>
              <p className="my-2 text-sm">
                It was your help that got him in! His essays came out amazing!
                The whole process is so confusing but RocketShip took all the
                stress out of it. You guys are amazing!
              </p>
              <h2 className="text-[#211A56] font-semibold text-xl ">
                Hamida Akter
              </h2>
              <p className="my-2">son admitted to University of Chicago</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div>
              <h3 className="text-2xl font-medium text-[#211A56]">
                Peace of Mind
              </h3>
              <p className="my-2 text-base text-black">
                We offer consistent support to Bangladeshi students from college
                list development to extracurricular planning in every critical
                and complex step. Our approach is aimed at empowering students
                to learn and grow practically and academically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
