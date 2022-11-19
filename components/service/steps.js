import React from "react";
import Image from "next/image";
import Service from "../../public/service/3.png";
import { GiGraduateCap } from "react-icons/gi";

const Steps = () => {
  const data = [
    {
      id: 0,
      img: "/service/3.png",
      title: "Individualized, growth-oriented coaching ",
      des: "The college application can be better understood as the culmination of the growth a student will experience in high school. RocketShip aims towards long-term outcomes that maximize student success, both academically and personally.",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto py-20">
      <div>
        <h1 className="text-5xl text-center font-bold text-[#270b4b] mb-3">
          Comprehensive College Guidance
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="flex flex-col">
          <div className="px-5">
            <div className="flex items-center justify-evenly gap-4 mt-5">
              <div>
                <GiGraduateCap size={40} className="text-[#ED1D26]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  1:1 Personalized Advising Sessions
                </h3>
                <p className="text-lg">
                  Engage in one-on-one advising sessions and receive tailored
                  guidance to best support your academic and collegiate
                  endeavors.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-5">
              <div>
                <GiGraduateCap size={40} className="text-[#ED1D26]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  Unlimited Essay and Resume Reviews
                </h3>
                <p className="text-lg">
                  Submit an unlimited number of essays and resumes for
                  comprehensive feedback.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-5">
              <div>
                <GiGraduateCap size={40} className="text-[#ED1D26]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Parent Check-Ins</h3>
                <p className="text-lg">
                  Connect with us to discuss your child’s progress and receive
                  tips on how to best support their college admissions journey.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-5">
              <div>
                <GiGraduateCap size={40} className="text-[#ED1D26]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  College Exploration and Thematic Workshops
                </h3>
                <p className="text-lg">
                  Join our virtual workshops to interact with our network of
                  RocketShip coaches from the nation’s top schools, find your
                  college fit, and prepare for college admissions success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[500px] mx-auto">
          <Image src={Service} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Steps;
