import Image from "next/image";
import React from "react";

const Detail = () => {
  const data = [
    {
      id: 0,
      img: "/service/3.png",
      title: "Individualized, growth-oriented coaching ",
      des: "The college application can be better understood as the culmination of the growth a student will experience in high school. RocketShip aims towards long-term outcomes that maximize student success, both academically and personally.",
    },
    {
      id: 1,
      img: "/service/3.png",
      title:
        "Mentorship from the nation's most impressive college admissions team",
      des: "College admissions coaches hail from the nation's top colleges and universities, including Harvard, Duke, and Columbia. When you work with our team, you receive the most strategic college guidance with a personable and professional touch. Our coaches are relatable, approachable, and invested in your success.",
    },
    {
      id: 2,
      img: "/service/3.png",
      title: "Best technology and curriculum in the industry",
      des: "Colleges want to learn about who you are in your college application. Our student-centric curriculum developed by former admissions officers and college admissions strategists builds the self-awareness high school students need to leverage their strengths and showcase their talents in their college application.",
    },
  ];
  return (
    <div>
      <div className="max-w-2xl mx-auto pt-10">
        <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[30px] text-center px-5 uppercase tracking-wider">
          Innovative Approach to College Counseling
        </h1>
      </div>
      {data.length > 0 &&
        data.map((item) => (
          // <Feature key={index.toString()} data={data} />
          <div
            key={item.id}
            className="max-w-7xl mx-auto text-black px-4 lg:px-24 grid gap-y-2 py-2 lg:py-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 px-6 gap-x-6 items-center">
              <div
                className={
                  item.id % 2 === 0
                    ? "order-1 flex items-center justify-center col-span-1"
                    : "order-2 flex items-center justify-center col-span-1"
                }
              >
                <Image
                  src={item.img}
                  width={350}
                  height={250}
                  className="rounded p-5 lg:p-12"
                  alt=""
                />
              </div>
              <div
                className={
                  item.id % 2 === 0
                    ? "order-2 text-black text-lg md:text-2xl col-span-2"
                    : "order-1 text-black text-lg md:text-2xl col-span-2"
                }
              >
                <h1 className="my-5 font-semibold uppercase">{item.title}</h1>
                <p className="text-lg">{item.des}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Detail;
