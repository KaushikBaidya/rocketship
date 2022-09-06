import React from "react";

const RatioService = () => {
  return (
    <section className="max-w-5xl mx-auto py-10 text-center bg-white">
      <div className=" grid grid-cols-1 lg:grid-cols-3 place-items-center py-10">
        <div className="text-center flex flex-wrap items-center justify-center gap-5">
          <div className="bg-yellow-200 w-44 h-44 rounded-full flex items-center justify-center">
            <h1 className="text-yellow-700 text-4xl">85%</h1>
          </div>
          <h1 className="text-2xl">Acceptance Rate</h1>
        </div>
        <div className="text-center flex flex-wrap items-center justify-center gap-5">
          <div className="bg-green-200 w-44 h-44 rounded-full flex items-center justify-center">
            <h1 className="text-green-700 text-4xl">1:1</h1>
          </div>
          <h1 className="text-2xl">Support From A Former Admissions Officer</h1>
        </div>
        <div className="text-center flex flex-wrap items-center justify-center gap-5">
          <div className="bg-pink-200 w-44 h-44 rounded-full flex items-center justify-center">
            <h1 className="text-pink-700 text-4xl">4.5x</h1>
          </div>
          <h1 className="text-2xl">More Likely To Get A Scholarship</h1>
        </div>
      </div>
      <br />
      <h1 className="text-2xl">
        Nursing Consulting Services that Deliver Results, Without Any Stress or
        Hassle
      </h1>
      <br />
    </section>
  );
};

export default RatioService;
