import React from "react";
import DetailsService from "./DetailsService";
import HeroService from "./HeroService";
import RatioService from "./RatioService";

const Services = () => {
  return (
    <section className="min-h-full">
      <HeroService />
      <RatioService />
      <DetailsService />
    </section>
  );
};

export default Services;
