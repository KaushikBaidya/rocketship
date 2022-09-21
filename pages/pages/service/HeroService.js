import Image from "next/image";
import advice from "../../../public/gallery/advice.jpg";

const HeroService = () => {
  return (
    <section className=" w-full">
      <div className="hidden lg:flex relative">
        <div className="bg-yellow-200 w-40 h-40 rounded-full absolute top-36 left-20 "></div>
        <div className="bg-green-200 w-28 h-28 rounded-full absolute top-28 right-24"></div>
        <div className="bg-red-200 w-16 h-16 rounded-full absolute top-36 left-96"></div>
      </div>
      <div className="max-w-[1600px] grid grid-cols-1 lg:grid-cols-2 h-full py-28 mx-auto z-10">
        <div className="mx-20 text-center lg:text-left z-10">
          <h1 className="text-3xl lg:text-5xl py-5 ">
            Best Counseling Service for College Admission.
          </h1>
          <h2 className="text-[16px] lg:text-xl py-5">
            Our start-to-finish BSN program consulting is meant to supercharge
            your ability to get accepted at the country’s most competitive
            nursing school programs. We tailor every aspect of your application
            to ensure the best quality right from your personal statement to
            your interview.
          </h2>
          <button className="px-8 py-4 bg-[#201B53] hover:bg-[#6a61d2] rounded-3xl text-white my-5">
            Read More
          </button>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <div className="w-[500px]">
            <Image src={advice} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroService;
