import React from "react";
// import { animated, useSpring } from "react-spring";

// function IncNumber({ n }) {
//   const { number } = useSpring({
//     from: { number: 0 },
//     number: n,
//     delay: 200,
//     config: { mass: 1, tension: 20, friction: 10 },
//   });
//   return (
//     <animated.div className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
//       {number.to((n) => n.toFixed(0))}
//     </animated.div>
//   );
// }

const Numbers = () => {
  return (
    <section className="bg-[#211A55] lg:py-10">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 grid justify-center">
        <div className="grid grid-cols-1 gap-10 mt-10 text-center sm:gap-x-8 md:grid-cols-3">
          <div className="bg-white drop-shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl">
            <h3 className="font-bold text-7xl pt-2">33</h3>
            <p className="mt-4 text-xl font-medium">
              Trusted by families in 33 countries for our college admission
              expertise.
            </p>
          </div>

          <div className="bg-white drop-shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl">
            <h3 className="font-bold text-7xl pt-2">900+</h3>
            <p className="mt-4 text-xl font-medium">
              students are enrolled in RocketShip&apos;s college counseling
              services worldwide
            </p>
          </div>

          <div className="bg-white drop-shadow-2xl p-5 rounded-tl-3xl rounded-br-3xl">
            <h3 className="font-bold text-7xl pt-2">93%</h3>
            <p className="mt-4 text-xl font-medium">
              get into at least one of their top five school choices.
            </p>
          </div>
        </div>
        <button className="bg-white border-2 border-red-500 rounded-tl-3xl rounded-br-3xl px-5 py-3 w-[150px] mx-auto my-10">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Numbers;
