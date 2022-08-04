import Image from "next/image";
import heroPic from "../../../public/hero.png";

const Hero = () => {
  return (
    <main>
      <div className="text-white lg:px-24 py-20 grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-y-10 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-full">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-10 text-left mx-2">
          <p className="text-2xl md:text-4xl text-center md:text-left px-3">
            Welcome to{" "}
            <span className="text-left text-white font-bold uppercase">
              rocketship
            </span>
          </p>
          <p className="text-xl text-white text-center md:text-left md:text-2xl px-3">
            Education consultants provide guidance to those who seek their
            service, which can include families, schools, colleges and
            universities.
          </p>

          <button className="bg-[#0056CC] text-white text-xl hover:bg-[#0030cc] px-3 py-3 w-56 rounded ml-3">
            Book A Free Consult
          </button>
        </div>
        <div className="hidden w-full md:grid grid-cols-1 content-center justify-items-center p-5">
          <Image className="rounded-lg shadow-xl" src={heroPic} alt="" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
