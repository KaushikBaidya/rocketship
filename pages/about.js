import React from "react";
import Career from "../components/aboutUs/career";
import Hero from "../components/aboutUs/hero";
import Numbers from "../components/aboutUs/numbers";
import OurValues from "../components/aboutUs/ourValues";
import HowWeWork from "../components/aboutUs/howWorks";
import Schedule from "../components/aboutUs/schedule";
import OurTeams from "../components/aboutUs/team";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About RocketShip Education </title>
      </Head>
      <Hero />
      <OurValues />
      <OurTeams />
      <Schedule />
      <Numbers />
      <Career />
      <HowWeWork />
    </div>
  );
};

export default about;
