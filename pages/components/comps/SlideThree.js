import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Teacher from "../../../public/service/1.png";

const SlideThree = () => {
  return (
    <div className="w-[1200px] h-[500px] bg-blue-600 grid grid-cols-2 py-28 items-center mx-auto">
      <div className="bg-green-200 pl-20 text-4xl">
        <h1 className="text-left">
          We will help you with your -{" "}
          <Typewriter
            options={{
              strings: ["Admission Counseling"],
              autoStart: true,
              loop: true,
              skipAddStyles: true,
            }}
          />
        </h1>
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

export default SlideThree;
