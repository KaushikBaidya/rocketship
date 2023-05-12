import Link from "next/link";
import React from "react";
import { RiArticleLine } from "react-icons/ri";
import { useGetData } from "../../../../hooks/DataApi";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";

const BlogInfo = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("blogs", `/getAllBlogs`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;
  return (
    <div className="max-w-[300px] rounded-xl drop-shadow-xl p-5 m-5 bg-gray-100 ">
      <div className="flex justify-between relative">
        <div>
          <div className="flex justify-center items-center bg-[#FF1C2B] text-white rounded-xl w-[65px] h-[65px] m-3 shadow-xl shadow-[#ff717adc] absolute bottom-8">
            <RiArticleLine size={40} />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-semibold">Number Of Blogs</p>
          <h1 className="text-2xl font-semibold text-[#FF1C2B]">
            {tmp.length}
          </h1>
        </div>
      </div>
      <div className="flex items-center font-medium w-full p-3 tracking-wide rounded-md border-t-2 ">
        Go To{" "}
        <span className="text-[#FF1C2B] font-semibold pl-2">
          <Link href="/dashboard/blog"> Blogs</Link>
        </span>
      </div>
    </div>
  );
};

export default BlogInfo;
