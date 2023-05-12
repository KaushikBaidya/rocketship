import React from "react";
import Image from "next/image";
import Research from "../../../public/icons/research.png";
import Application from "../../../public/icons/application.png";
import Guidance from "../../../public/icons/guidence.png";
import Testing from "../../../public/icons/testing.png";
import EssayReview from "../../../public/icons/easyreview.png";
import Options from "../../../public/gallery/options.jpeg";

const CollegeGuidance = () => {
  return (
    <main className="xl:max-w-screen-lg mx-auto ">
      <section className="py-4 sm:py-8 lg:py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl text-[#211A56] lg:text-4xl font-semibold text-center px-5 mb-4">
              Our In-Depth Approach to College Guidance
            </h1>
            <p className="text-[12px] lg:text-[15px] font-medium text-left px-5">
              We are an innovative college admissions guidance agency. Our
              in-depth and one-to-one approach to helping Bangladeshi students
              secure admissions is transforming how students approach and apply
              to institutes in the US. We help students enroll in the college
              they prefer. Here are the basic steps you would follow:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 place-content-center">
            <ul className=" mx-auto mt-16 space-y-6">
              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <Image src={Research} width={40} alt="research" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Complete Research Based on Your Preferences
                  </h3>
                  <p className="mt-4 text-[.9rem] font-medium">
                    The college application can be better understood as the
                    culmination of the growth a student will experience in high
                    school. RocketShip aims towards long-term outcomes that
                    maximize student success, both academically and personally.
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>

                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <Image src={Application} width={30} alt="application" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Application Guidance
                  </h3>
                  <p className="mt-4 text-[.9rem] font-medium ">
                    Typically you would need to complete your HSC or A-levels
                    before attending a undergraduate college in United States.
                    We recommend you apply one year before you pass your HSC /
                    A-Levels. Our consultants will guide you step by step on the
                    application: submitting transcripts and other necessary
                    documents
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <Image src={Guidance} width={35} alt="guidence" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Expert Guidance
                  </h3>
                  <p className="mt-4 text-[.9rem] font-medium">
                    Our counselors graduated from the top universities and
                    colleges of the nation including UC Berkeley and Georgetown
                    among others. Our team offers strategic college guidance
                    with a professional and individualized touch. You can trust
                    our coaches because they care for you, are approachable, and
                    are relatable.
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div
                  className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full"
                  aria-hidden="true"
                ></div>
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <Image src={Testing} width={30} alt="testing" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Testing Requirements
                  </h3>
                  <p className="mt-4 text-[.9rem] font-medium">
                    Universities have testing requirements such as IELTS, TOFL
                    or the SAT. We will guide on most suitable test needed and
                    help you succeed on these exams
                  </p>
                </div>
              </li>

              <li className="relative flex items-start">
                <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-shapeRed bg-no-repeat">
                  <Image src={EssayReview} width={30} alt="essay review" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[1.2rem] font-semibold text-[#211A56]">
                    Essay Review
                  </h3>
                  <p className="mt-4 text-[.9rem] font-medium">
                    Having a solid admission essay and supplemental essay is key
                    for college admission. Rocketship can help you craft the
                    compelling college admissions essay you need to convince
                    US-based institutes. Your personal and supplementary essays
                    can make or break the chance of getting into your dream
                    school.
                  </p>
                </div>
              </li>
            </ul>
            <div className="max-w-[450px] flex items-center justify-center mx-2 lg:mx-auto my-2">
              <Image src={Options} width={550} height={550} alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CollegeGuidance;
