import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { Loader } from "../../../components/common/Loader";

// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/getPublishedBlogs`);
//   const data = await res.json();
//   return { props: { data } };
// }

const AllCourses = () => {
  // if (!data) return <Loader />;
  const tmp = [
    {
      course_id: "01",
      price: "$100",
      course_name: "PROFESSIONAL GRAPHIC DESIGN",
      picture: "https://i.ibb.co/Zzt5KG8/graphic.png",
      authou: "authou1",
    },
    {
      course_id: "02",
      price: "$100",
      course_name: "WEB DEVELOPMENT",
      picture: "https://i.ibb.co/CJZxYTJ/webdevelopment.jpg",
      authou: "authou2",
    },
    {
      course_id: "03",
      price: "$100",
      picture: "https://i.ibb.co/Q98jT3p/graphic.jpg",
      authou: "authou3",
      course_name: "ADVANCED GRAPHIC DESIGN",
    },
    {
      course_id: "04",
      price: "$100",
      course_name: "DIGITAL MARKETING",
      picture: "https://i.ibb.co/Cn0tw7X/digital.jpg",
      authou: "authou4",
    },
    {
      course_id: "05",
      price: "$100",
      course_name: "UI/UX DESIGN",
      picture: "https://i.ibb.co/2Wbj9pP/ui.jpg",
      authou: "authou5",
    },
    {
      course_id: "06",
      price: "$100",
      course_name: "FULL STACK WEB DEVELOPMENT",
      picture: "https://i.ibb.co/S0JKJKC/full.jpg",
      authou: "authou6",
    },
    {
      course_id: "07",
      price: "$100",
      course_name: "WORDPRESS THEMES CUSTOMIZATION",
      picture: "https://i.ibb.co/WnN6psQ/worp.jpg",
      authou: "authou7",
    },
  ];

  return (
    <div className="xl:max-w-screen-lg mx-auto grid grid-cols-1 justify-items-center content-center mb-20 pt-28">
      <div className="flex flex-col items-center mx-auto mb-5">
        <h2 className="text-xl text-[#211A56] font-semibold lg:text-4xl text-center px-5 uppercase tracking-wider">
          All Courses
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-6xl gap-5 p-5">
        {tmp.map((item) => (
          <div key={item.course_id} className="grid rounded-lg shadow-lg">
            <Image
              src={item.picture}
              alt="Blog title"
              width={381}
              height={200}
              className="w-full rounded-t-lg object-cover object-center h-[200px]"
            />
            <div className="px-6 py-4 bg-white grid gap-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.course_name}
              </h2>
              <h2 className="text-3xl text-[#F13841]">{item.price}</h2>

              <Link href="/paymentBkash">
                <button className="px-4 py-2 text-sm text-white bg-[#211A56] rounded-lg hover:bg-indigo-600">
                  Enroll now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
