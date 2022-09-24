import React from "react";
import HeroService from "./HeroService";
import DetailsService from "./DetailsService";

const Services = () => {
  return (
    <section className="min-h-full">
      <HeroService />
      <DetailsService />
    </section>
  );
};

export default Services;
