import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Loader } from "../../common/Loader";
// import { useGetData } from "../../../hooks/DataApi";
// import { Error } from "../../common/Error";
// import { FaRocket } from "react-icons/fa";

const BlogsSection = ({ data }) => {
  // const {
  //   data: list,
  //   error,
  //   isLoading,
  //   isError,
  // } = useGetData("blogs", "/getPublishedBlogs");
  // if (isError) return <Error message={error.message} />;

  if (!data) return <Loader />;

  const tmp = data.slice(0, 3);
  return (
    <main>
      <section>
        <div className="w-full grid grid-cols-1 justify-items-center content-center mt-10">
          <div className="flex flex-col items-center mx-auto my-5">
            {/* <FaRocket className="text-4xl text-[#EF1C26] font-bold mb-3" /> */}

            <h1 className="text-2xl lg:text-4xl font-semibold text-[#221a55] px-10 py-2 text-center">
              Latest Blog Posts
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-5 p-5">
            {tmp.map((item) => (
              <div key={item.blogId} className="grid rounded-lg shadow-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={381}
                  height={200}
                  className="w-full rounded-t-lg object-cover object-center h-[150px]"
                />
                <div className="px-6 py-4 bg-white grid gap-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>

                  <Link href={`/blog/${item.permalink}`}>
                    <button className="px-4 py-2 text-sm text-white bg-[#211A56] rounded-lg hover:bg-indigo-600">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <Link href="/blogs">
            <button className="px-10 py-3 text-[#211A56] border-2 border-[#F11B25] mr-4 rounded-tl-3xl rounded-br-3xl hover:shadow-red-500 hover:shadow-2xl hover:bg-[#F11b25] hover:text-white my-5">
              View All Blogs
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default BlogsSection;
