import Image from "next/image";
import rocket from "../../../public/rocket.png";

const OurPrograms = () => {
  return (
    <section className="min-h-full py-20">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-2xl mx-auto py-5">
          <h2 className="text-[24px] text-slate-600 font-bold sm:mt-4 lg:text-[36px] text-center px-5 uppercase tracking-wider">
            Our Programs
          </h2>
        </div>
        <div className="py-2">
          <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 mx-auto px-5 gap-5">
            <div className="bg-blue-100 flex flex-col items-center h-full py-5 rounded-md hover:drop-shadow-lg">
              <div className="p-5">
                <Image src={rocket} width={150} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#0062d2] font-bold text-3xl p-2">
                Flagship Admission
              </h2>
              <p className="text-left font-medium text-lg p-2">
                Complete admissions support for aspiring international students
                willingt to study in the USA, Canada, Japan, Europe and many
                more!
              </p>
            </div>
            <div className="bg-blue-100 flex flex-col items-center h-full py-5 rounded-md hover:drop-shadow-lg">
              <div className="p-5">
                <Image src={rocket} width={150} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#0062d2] font-bold text-3xl p-2">
                Flagship SAT Speedrun
              </h2>
              <p className="text-left font-medium text-lg p-2">
                We bring forward to you our next big thing, the SAT Speedrun,
                after lots of requests from potential students who we had to
                turn away for the time being due to the limited class size!
              </p>
            </div>
            <div className="bg-blue-100 flex flex-col items-center h-full py-5 rounded-md hover:drop-shadow-lg">
              <div className="p-5">
                <Image src={rocket} width={150} height={150} alt="" />
              </div>
              <h2 className="text-center text-[#0062d2] font-bold text-3xl p-2">
                Essay Review
              </h2>
              <p className="text-left font-medium text-lg p-2">
                Get your Personal statement and supplemental essays reviewed by
                experts and furnish your essay to make it ready for you
                application!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPrograms;
