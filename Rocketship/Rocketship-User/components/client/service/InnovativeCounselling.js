import React from "react";
import Image from "next/image";
import Service from "../../../public/gallery/counselling.png";
import { GiGraduateCap } from "react-icons/gi";

const InnovativeCounselling = () => {
  return (
    <main>
      <section className="xl:max-w-screen-lg mx-auto lg:pb-10">
        <div className="mb-8">
          <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[36px] text-center px-5">
            Innovative Counseling
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
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    One-on-One Customized Guidance Sessions
                  </h3>
                  <p className="mt-1 text-[.9rem] font-medium">
                    You can engage in a personalized advising session with the
                    best counselors in the industry to support your college and
                    academic journey
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <div>
                  <GiGraduateCap size={40} className="text-[#ED1D26]" />
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Parent Check-Ins
                  </h3>
                  <p className="mt-1 text-[.9rem] font-medium">
                    Communicate with us and get to know your child&apos;s
                    success and progress. Get tips about how to best support
                    their journey to their dream institute.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <div>
                  <GiGraduateCap size={40} className="text-[#ED1D26]" />
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Unlimited Resume and Essay Revues
                  </h3>
                  <p className="mt-1 text-[.9rem] font-medium">
                    Share unlimited resumes and essays and get comprehensive
                    feedback from us
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mt-5">
                <div>
                  <GiGraduateCap size={40} className="text-[#ED1D26]" />
                </div>
                <div>
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    College Thematic and Exploration Workshops
                  </h3>
                  <p className="mt-1 text-[.9rem] font-medium">
                    Participate in virtual workshops to work and interact with
                    our coaches from the top schools in the nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[350px] mx-2 lg:mx-auto my-2">
            <div className="flex items-center justify-center">
              <Image src={Service} alt="service" />
            </div>
            <p className="px-5 text-sm mt-2">
              Our online college platform, enables you to engage with your
              college admissions coach and the latest admissions data for
              colleges nationwide
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InnovativeCounselling;
