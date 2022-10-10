import React from "react";
import Hero from "../components/service/hero";
import Details from "../components/service/detail";
import Steps from "../components/service/steps";
import Show from "../components/service/Show";
import Success from "../components/Home/Sections/Success";

const service = () => {
  return (
    <div>
      <Hero />
      <Details />
      <Success />
      <Steps />
      {/* <Show /> */}
    </div>
  );
};

export default service;
