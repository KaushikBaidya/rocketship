import React from "react";
import Detail from "../components/service/Detail";
import Steps from "../components/service/Steps";
import Success from "../components/Home/Sections/Success";
import Review from "../components/service/Review";
import Successful from "../components/service/Successful";
import Head from "next/head";
import Hero from "../components/service/Hero";

const Service = () => {
  return (
    <div>
      <Head>
        <title>Our Services</title>
      </Head>
      <Hero />
      <Detail />
      <Success />
      <Steps />
      <Review />
      <Successful />
    </div>
  );
};

export default Service;
