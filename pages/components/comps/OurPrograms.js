import Image from "next/image";
import Link from "next/link";
import teacher from "../../../public/service/3.png";
import essay from "../../../public/service/1.png";
import finance from "../../../public/service/4.png";
import test from "../../../public/service/2.png";

const OurPrograms = () => {
  return (
    <section className="min-h-full pb-14">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-2xl mx-auto pb-5">
          <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
            Our Services
          </h2>
        </div>
        <div className="py-2">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 mx-auto px-5 gap-5">
            <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between ">
              <div className="p-5">
                <Image src={teacher} width={200} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#211A56] font-bold text-xl p-5">
                College Admissions Counseling
              </h2>
              <Link href="/pages/service/counselling/counselling">
                <button className="bg-[#EF1C26] p-2 rounded-full text-white font-semibold">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between ">
              <div className="p-5">
                <Image src={essay} width={170} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#211A56] font-bold text-xl p-3">
                Essay Editing Services
              </h2>
              <Link href="/pages/service/essay/essay">
                <button className="bg-[#EF1C26] p-2 rounded-full text-white font-semibold">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between">
              <div className="p-5">
                <Image src={finance} width={250} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#211A56] font-bold text-xl p-5">
                Financial Planning Assistance
              </h2>
              <Link href="/pages/service/services">
                <button className="bg-[#EF1C26] p-2 rounded-full text-white font-semibold">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="bg-purple-100 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between">
              <div className="p-5">
                <Image src={test} width={250} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#211A56] font-bold text-xl p-5">
                Test Preparation
              </h2>
              <Link href="/pages/service/services">
                <button className="bg-[#EF1C26] p-2 rounded-full text-white font-semibold">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
