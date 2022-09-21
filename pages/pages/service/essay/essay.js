import React from "react";
import HeroService from "./HeroService";
import DetailsService from "./DetailsService";

const Essay = () => {
  return (
    <section className="min-h-full">
      <HeroService />
      <DetailsService />
    </section>
  );
};

export default Essay;
