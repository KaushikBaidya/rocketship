import Image from "next/image";
import React, { useState } from "react";
import faqs from "../../../public/gallery/faqs.jpg";

const Faq = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);

  return (
    <div className="xl:max-w-screen-lg mx-auto md:py-5 px-5 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-8 mt-8">
        <div className="w-full">
          <Image
            src={faqs}
            alt="Img of Glass bottle"
            className="w-full md:block hidden"
            width={450}
            height={400}
          />
        </div>
        <div className="w-full px-2">
          <h2 className=" font-semibold lg:text-3xl text-xl lg:leading-9 md:leading-7 leading-9 text-gray-800 mb-5 lg:mb-10">
            Frequently Asked Questions
          </h2>
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="text-base font-medium leading-5 text-gray-800">
                What are the requirements to study in the USA for Undergraduate
                Students?
              </h3>
              <button
                aria-label="too"
                className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow(!show)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show ? "block" : "hidden")
              }
            >
              If you are a student from Bangladesh, you need to have an HSC+
              One-year completion certificate from any Bangladeshi university. A
              study gap maximum of 1.5 years is accepted with an HSC result that
              is not below a GPA of 4.00 out of 5.00.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          {/* <!-- Returns Section --> */}

          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className="text-base font-medium leading-5 text-gray-800">
                What are the requirements to study in the USA for Postgraduate
                Students?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow2(!show2)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show2 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show2 ? "block" : "hidden")
              }
            >
              For bachelor (Hons, BSc, BBA, BA) result not be below CGPA 3. GMAT
              is required for business courses and GRE will be required as well.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />

          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className="text-base font-medium leading-5 text-gray-800">
                What Language Proficiency do I need to study in the USA?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow3(!show3)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show3 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show3 ? "block" : "hidden")
              }
            >
              For English medium Study: IELTS Score of 6.5 minimum or an ESL
              program with the main course is required to study in the USA.
            </p>
          </div>

          <hr className=" my-7 bg-gray-200" />
          <div>
            <div className=" flex justify-between items-center cursor-pointer">
              <h3 className="text-base font-medium leading-5 text-gray-800">
                What are the Required Documents for a USA study visa?
              </h3>
              <button
                aria-label="too"
                className=" cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => setShow4(!show4)}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={show4 ? "hidden" : "block"}
                    d="M10 4.1665V15.8332"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.16602 10H15.8327"
                    stroke="#1F2937"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                "font-normal text-base leading-6 text-gray-600 mt-4 w-11/12 " +
                (show4 ? "block" : "hidden")
              }
            >
              You will need the following documents:{" "}
              <ul className="list-disc lg:pl-10">
                <li>Passport size photo (white background)</li>
                <li>Curriculum Vitae (CV)</li>
                <li>IELTS Certificate (6.0 or 6.5 min)</li>
                <li>Two Recommendation Letters (for Masters)</li>
                <li>
                  Personal letter of motivation stating your career objectives
                  (for Masters)
                </li>
              </ul>
            </div>
          </div>

          <hr className=" my-7 bg-gray-200" />

          {/* Tracking Section */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
