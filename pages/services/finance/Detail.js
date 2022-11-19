import Image from "next/image";
import React from "react";

const Detail = () => {
  const data = [
    {
      id: 0,
      img: "/service/4.png",
      title: "STEP 1: Application ",
      des: "Fill out a free application (FAFSA). The federal processor calculates your Expected Family Contribution (EFC). Student will be emailed a Student Aid Report (SAR). File the FAFSA and verification documents (if required).",
    },
    {
      id: 1,
      img: "/service/4.png",
      title: "STEP 2: Verification",
      des: "The Financial Aid office receives your FAFSA application. Students who are selected will receive an email from the Department of Education. Student completes verification process.",
    },
    {
      id: 2,
      img: "/service/4.png",
      title: "STEP 3: Award",
      des: "Student must be accepted into chosen degree program. Eligibility for financial aid is determined. Eligible student aid recipients will receive an email notification from the University that their aid application has been processed. Financial aid is disbursed.",
    },
  ];
  return (
    <div>
      <div className="max-w-2xl mx-auto pt-10">
        <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[30px] text-center px-5 uppercase tracking-wider">
          How to Apply for Financial Aid
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
