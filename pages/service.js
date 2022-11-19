import Head from "next/head";
import React from "react";
import Detail from "../components/ourService/Detail";
import Hero from "../components/ourService/Hero";
import Review from "../components/ourService/Review";
import Steps from "../components/ourService/Steps";
import Successful from "../components/ourService/Successful";

const Service = () => {
  return (
    <div>
      <Head>
        <title>Our Services</title>
      </Head>
      <Hero />
      <Detail />
      <Steps />
      <Review />
      <Successful />
    </div>
  );
};

export default Service;
