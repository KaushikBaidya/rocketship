import React from "react";
import Hero from "../components/service/hero";
import Details from "../components/service/detail";
import Steps from "../components/service/steps";
import Success from "../components/Home/Sections/Success";

const service = () => {
  return (
    <div>
      <Hero />
      <Details />
      <Steps />
      <Success />
    </div>
  );
};

export default service;
