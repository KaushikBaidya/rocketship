import Image from "next/image";
import Link from "next/link";

import { FaRocket } from "react-icons/fa";

const Blogs = () => {
  const data = [
    {
      id: "1",
      img: "/blog1.jpeg",
      date: "25 aug, 2021",
      title: "How to make use of your free time to study",
      auth: "Jenne",
    },
    {
      id: "2",
      img: "/blog2.jpeg",
      date: "25 aug, 2021",
      title: "How to make use of your free time to study",
      auth: "Jenne",
    },
    {
      id: "3",
      img: "/blog3.jpg",
      date: "25 aug, 2021",
      title: "How to make use of your free time to study",
      auth: "Jenne",
    },
  ];
  return (
    <section>
      <div className="w-full grid grid-cols-1 justify-items-center content-center mb-20">
        <div className="flex flex-col items-center mx-auto mb-5">
          <FaRocket className="text-4xl text-[#EF1C26] font-bold mb-3" />
          <h3 className="text-lg text-[#211A56] text-center mx-28">
            From The Blog Post
          </h3>
          <h2 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-center px-5 uppercase tracking-wider">
            News & Articles
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl gap-5 p-5">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full bg-purple-100 flex flex-col justify-between items-center rounded-lg overflow-hidden h-full hover:drop-shadow-lg cursor-pointer "
              >
                <Link href="/pages/single">
                  <div>
                    <div className="rounded-lg overflow-hidden">
                      <Image
                        src={item.img}
                        width={359}
                        height={210}
                        objectFit="cover"
                        alt=""
                      />
                    </div>
                    <div className="bg-purple-100 flex flex-col items-start ">
                      <p className="bg-[#EF1C26] text-sm lg:text-xl text-center w-36 p-3 mt-5 ml-5 text-white">
                        {item.date}
                      </p>
                      <h2 className="text-[#211A56] font-bold text-base lg:text-2xl p-5">
                        {item.title}
                      </h2>
                      <p className="text-justify font-light text-base lg:text-lg px-5 pb-5">
                        By {item.auth}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blogs;