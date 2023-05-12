import Link from "next/link";
import React from "react";
import { VscCommentDiscussion } from "react-icons/vsc";
import { useGetData } from "../../../../hooks/DataApi";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";

const TestimonialInfo = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("testimonials", `/getAllTestimonials`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;
  return (
    <div className="max-w-[300px] rounded-xl drop-shadow-xl p-5 m-5 bg-gray-100 ">
      <div className="flex justify-between relative">
        <div>
          <div className="flex justify-center items-center bg-[#369CF0] text-white rounded-xl w-[65px] h-[65px] m-3 shadow-xl shadow-cyan-500/50 absolute bottom-8">
            <VscCommentDiscussion size={40} />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-semibold">Number Of Testimonials</p>
          <h1 className="text-2xl font-semibold text-[#369CF0]">
            {tmp.length}
          </h1>
        </div>
      </div>
      <div className="flex items-center font-medium w-full p-3 tracking-wide rounded-md border-t-2 ">
        Go To{" "}
        <span className="text-[#369CF0] font-semibold pl-2">
          <Link href="/dashboard/testimonials"> Testimonials</Link>
        </span>
      </div>
    </div>
  );
};

export default TestimonialInfo;
