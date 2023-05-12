import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../../common/Loader";
// import { Error } from "../../common/Error";
// import { useGetData } from "../../../hooks/DataApi";

const VisaProcess = ({ data }) => {
  // const {
  //   data: list,
  //   error,
  //   isLoading,
  //   isError,
  // } = useGetData("visa", `/home/visa`);

  if (!data) return <Loader />;

  // if (isError) return <Error message={error.message} />;

  const tmp = data;
  return (
    <section className="w-full pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-10 py-2 text-center">
          Visa Process
        </h1>
      </div>
      <div className="xl:max-w-screen-lg grid grid-cols-1 lg:grid-cols-2 pb-5 lg:py-10 mx-auto">
        <div className="mx-5 lg:mx-10 text-center lg:text-left">
          <h3 className="text-xl lg:text-[20px] font-semibold text-[#211A53] pb-5 text-left">
            {tmp.title}
          </h3>
          <p className="text-base text-left md:text-justify pr-5">
            {tmp.subtitle}
          </p>
          <p className="text-base text-left md:text-justify pr-5 mt-5">
            {tmp.subtitle2}
          </p>
          {/* <div className="mt-10 text-sm font-medium">
            <Link href="/ourservice">
              <button className="px-9 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                Learn More
              </button>
            </Link>
            <Link href="/contactus">
              <button className="px-10 py-3 text-[#211A56] bg-white border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-2">
                Contact Us
              </button>
            </Link>
          </div> */}
        </div>
        <div className="flex items-center justify-center mx-5">
          <div className="max-w-[500px] z-30">
            <Image
              src={tmp.image}
              //   src={`https://drive.google.com/uc?export=view&id=${tmp.image1}`}
              width={500}
              height={300}
              alt="visa processing"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisaProcess;
