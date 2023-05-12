import React from "react";
import Image from "next/image";
import Rafsun from "../../../public/team/rafsun.png";
import habib from "../../../public/team/habib.png";
import kaushik from "../../../public/team/kaushik.png";
import { CiFacebook, CiLinkedin, CiTwitter } from "react-icons/ci";

const OurTeam = () => {
  return (
    <main>
      <section className="min-h-full pb-14">
        <div className="h-full grid grid-cols-1 content-center">
          <div className="max-w-2xl mx-auto pb-5">
            <h2 className="text-2xl text-[#211A56] font-semibold lg:text-4xl text-center px-5">
              Meet Our Team
            </h2>
          </div>
          <div className="py-2">
            <div className="xl:max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col items-center justify-center bg-white p-4 drop-shadow-lg rounded-lg">
                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                  <Image
                    src={Rafsun}
                    alt="Rafsun Faiz"
                    className="h-full w-full"
                  />
                </div>

                <h2 className="mt-4 font-bold text-xl">Rafsun Faiz</h2>
                <h6 className="mt-2 text-sm font-medium">
                  Chief Executive Officer
                </h6>

                <ul className="flex flex-row mt-4 space-x-2">
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiLinkedin size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiTwitter size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiFacebook size={30} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center bg-white p-4 drop-shadow-lg rounded-lg">
                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                  <Image
                    src={habib}
                    alt="Hashan Habib"
                    className="h-full w-full"
                  />
                </div>

                <h2 className="mt-4 font-bold text-xl">Hashan Habib</h2>
                <h6 className="mt-2 text-sm font-medium">Tech Lead</h6>

                <ul className="flex flex-row mt-4 space-x-2">
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiLinkedin size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiTwitter size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiFacebook size={30} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center bg-white p-4 drop-shadow-lg rounded-xl">
                <div className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
                  <Image
                    src={kaushik}
                    alt="team member"
                    className="h-full w-full"
                  />
                </div>

                <h2 className="mt-4 font-bold text-xl">Kaushik Baidya</h2>
                <h6 className="mt-2 text-sm font-medium">Software Engineer</h6>

                <ul className="flex flex-row mt-4 space-x-2">
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiLinkedin size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiTwitter size={30} />
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="flex items-center justify-center h-8 w-8 text-gray-800"
                    >
                      <CiFacebook size={30} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurTeam;
