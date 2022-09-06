import Image from "next/image";
import React from "react";
// import Feature from "./Feature";

const DetailsService = () => {
  const data = [
    {
      id: 0,
      img: "/service/1.png",
      title: "College Admissions Counseling ",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
    {
      id: 1,
      img: "/service/1.png",
      title: "Essay Editing Services ",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
    {
      id: 2,
      img: "/service/1.png",
      title: "Financial Planning Assistance",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
  ];
  return (
    <>
      {data.length > 0 &&
        data.map((item) => (
          // <Feature key={index.toString()} data={data} />
          <div
            key={item.id}
            className="max-w-7xl mx-auto text-black px-4 lg:px-24 grid gap-y-2 py-10 lg:py-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-x-6 items-center">
              <div
                className={
                  item.id % 2 === 0
                    ? "order-1 flex items-center justify-center"
                    : "order-2 flex items-center justify-center"
                }
              >
                <Image
                  src={item.img}
                  width={350}
                  height={350}
                  className="rounded p-5 lg:p-12"
                  alt=""
                />
              </div>
              <div
                className={
                  item.id % 2 === 0
                    ? "order-2 text-black text-lg md:text-3xl"
                    : "order-1 text-black text-lg md:text-3xl"
                }
              >
                <h1 className="my-5">{item.title}</h1>
                <p className="text-lg">{item.des}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default DetailsService;
