import { FaPenNib, FaCheckCircle, FaUniversity, FaGlobe } from "react-icons/fa";
const Services = () => {
  return (
    <section className=" bg-white antialiased ">
      <div className="bg-[url('../public/sbanner.jpg')] bg-fixed">
        <div className="bg-[#0653d0f0] text-white backdrop-blur-none grid grid-cols-1 gap-y-3 px-10 py-20 justify-items-center content-center mx-auto">
          <p className="text-3xl md:text-5xl text-center px-3">
            We advise you, you call the right decision!
          </p>
          <p className="text-center text-lg font-normal md:text-xl lg:px-20">
            We are on a mission help students with the most accurate, accessible
            and affordable study-abroad content and mentorship program!
          </p>
          <div className="w-full flex flex-wrap gap-10 justify-around py-12">
            <div className="flex flex-col justify-center items-center gap-2 text-2xl lg:text-4xl">
              <FaPenNib className="text-3xl lg:text-6xl" />
              <span>100+ Blogs</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-2xl lg:text-4xl">
              <FaCheckCircle className="text-3xl lg:text-6xl" />
              <span>20+ Acceptence</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-2xl lg:text-4xl">
              <FaUniversity className="text-3xl lg:text-6xl" />
              <span>5+ Programs</span>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-2xl lg:text-4xl">
              <FaGlobe className="text-3xl lg:text-6xl" />
              <span>Recognition</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
