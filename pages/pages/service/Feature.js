import Image from "next/image";
import React from "react";

const Fetaure = ({ feature }) => {
  const { id, img, title, des } = feature;
  return (
    <div className="max-w-7xl mx-auto text-black px-4 lg:px-24 grid gap-y-2 py-10 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 gap-x-6 items-center">
        <div
          className={
            id % 2 === 0
              ? "order-1 flex items-center justify-center"
              : "order-2 flex items-center justify-center"
          }
        >
          <Image
            src={img}
            width={350}
            height={350}
            className="rounded p-5 lg:p-12"
            alt=""
          />
        </div>
        <div
          className={
            id % 2 === 0
              ? "order-2 text-black text-lg md:text-3xl"
              : "order-1 text-black text-lg md:text-3xl"
          }
        >
          <h1 className="my-5">{title}</h1>
          <p className="text-lg">{des}</p>
        </div>
      </div>
    </div>
  );
};

export default Fetaure;
