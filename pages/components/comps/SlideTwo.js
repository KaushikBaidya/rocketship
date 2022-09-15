import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Teacher from "../../../public/service/1.png";

const SlideTwo = () => {
  return (
    <div className="w-[1200px] h-[500px] bg-green-600 grid grid-cols-2 py-28 items-center mx-auto">
      <div className="bg-green-200 pl-20 text-4xl">
        <h1 className="text-left">We will help you with your - </h1>
        <h2>
          <Typewriter
            options={{
              strings: ["Financial Planning"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </h2>
      </div>
      <div div className="bg-yellow-200">
        <Image
          src={Teacher}
          width={400}
          height={200}
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default SlideTwo;
