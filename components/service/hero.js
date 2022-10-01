import Image from "next/image";
import Service from "../../public/service/3.png";
import wave from "../../public/wave.svg";
import wav from "../../public/wav.svg";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="hidden lg:block relative max-w-[1800px] mx-auto">
        <div className="bg-yellow-200 w-40 h-40 rounded-full absolute top-36 left-20 "></div>
        <div className="bg-green-200 w-28 h-28 rounded-full absolute top-28 right-24"></div>
        <div className="bg-red-200 w-16 h-16 rounded-full absolute top-36 left-96"></div>
        <div className="w-full absolute top-0">
          {/* <Image className="" src={wave} alt="" /> */}
          <svg
            id="wave"
            style={{ transform: "0deg", transition: "0.3s" }}
            viewBox="0 0 1440 490"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop
                  stop-color="rgba(156.709, 1.81, 205.231, 1)"
                  offset="0%"
                ></stop>
                <stop stop-color="rgba(255, 11, 11, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              style={{ transform: "translate(0, 0px)", opacity: "1" }}
              fill="url(#sw-gradient-0)"
              d="M0,343L80,302.2C160,261,320,180,480,179.7C640,180,800,261,960,285.8C1120,310,1280,278,1440,220.5C1600,163,1760,82,1920,73.5C2080,65,2240,131,2400,179.7C2560,229,2720,261,2880,302.2C3040,343,3200,392,3360,375.7C3520,359,3680,278,3840,253.2C4000,229,4160,261,4320,253.2C4480,245,4640,196,4800,220.5C4960,245,5120,343,5280,326.7C5440,310,5600,180,5760,163.3C5920,147,6080,245,6240,294C6400,343,6560,343,6720,318.5C6880,294,7040,245,7200,245C7360,245,7520,294,7680,302.2C7840,310,8000,278,8160,261.3C8320,245,8480,245,8640,204.2C8800,163,8960,82,9120,114.3C9280,147,9440,294,9600,343C9760,392,9920,343,10080,318.5C10240,294,10400,294,10560,277.7C10720,261,10880,229,11040,236.8C11200,245,11360,294,11440,318.5L11520,343L11520,490L11440,490C11360,490,11200,490,11040,490C10880,490,10720,490,10560,490C10400,490,10240,490,10080,490C9920,490,9760,490,9600,490C9440,490,9280,490,9120,490C8960,490,8800,490,8640,490C8480,490,8320,490,8160,490C8000,490,7840,490,7680,490C7520,490,7360,490,7200,490C7040,490,6880,490,6720,490C6560,490,6400,490,6240,490C6080,490,5920,490,5760,490C5600,490,5440,490,5280,490C5120,490,4960,490,4800,490C4640,490,4480,490,4320,490C4160,490,4000,490,3840,490C3680,490,3520,490,3360,490C3200,490,3040,490,2880,490C2720,490,2560,490,2400,490C2240,490,2080,490,1920,490C1760,490,1600,490,1440,490C1280,490,1120,490,960,490C800,490,640,490,480,490C320,490,160,490,80,490L0,490Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 pt-28 pb-5 lg:pb-28 mx-auto z-10">
        <div className="mx-5 lg:mx-20 text-center lg:text-left z-10">
          <h1 className="text-3xl lg:text-5xl text-[#211A53] py-5 ">
            Best Counseling Service for College Admission.
          </h1>
          <h2 className="text-[16px] text-white text-justify lg:text-xl p-5">
            Our start-to-finish BSN program consulting is meant to supercharge
            your ability to get accepted at the country’s most competitive
            nursing school programs. We tailor every aspect of your application
            to ensure the best quality right from your personal statement to
            your interview.
          </h2>
        </div>
        <div className="flex items-center justify-center mx-5">
          <div className="max-w-[500px]">
            <Image src={Service} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
