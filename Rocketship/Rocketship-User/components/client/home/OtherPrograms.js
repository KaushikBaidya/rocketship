import Image from "next/image";
import accepted from "../../../public/icons/accepted.png";
import sheets from "../../../public/icons/sheets.png";
import running from "../../../public/icons/running.png";

const OtherPrograms = () => {
  return (
    <section className="min-h-full py-14 px-10">
      <div className="h-full grid grid-cols-1 content-center">
        <div className="max-w-5xl mx-auto pb-10">
          <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-5 py-2 text-center">
            We help you grow, thrive, and be the star student you aim to be in
            the US.
          </h1>
        </div>
        <div className="py-2">
          <div className="xl:max-w-screen-lg grid grid-cols-1 md:grid-cols-3 mx-auto gap-10">
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-items-start">
              <div className="py-2 w-14">
                <Image src={accepted} height={50} alt="accepted" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl">
                2x more to be accepted
              </h2>
              <p className="text-sm">
                Become 2x more likely get your visa approved and nail the
                interview and get hired.
              </p>
            </div>
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-items-start">
              <div className="py-2 w-14">
                <Image src={sheets} height={50} alt="documents" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl">
                Documents Ready.
              </h2>
              <p className="text-sm">
                Get a complete audit of the documents need and guidance on what
                to present.
              </p>
            </div>
            <div className="w-full flex bg-white flex-col h-full py-10 px-5 rounded-tl-3xl rounded-br-3xl drop-shadow-2xl justify-items-start">
              <div className="py-2 w-14">
                <Image src={running} height={50} alt="running" />
              </div>
              <h2 className="text-[#211A56] font-semibold text-xl">
                Cut 2 Months
              </h2>
              <p className="text-sm">
                Expedite the visa process by 2 months with Rocketship
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherPrograms;
