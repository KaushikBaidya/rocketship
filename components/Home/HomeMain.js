import Head from "next/head";
import Hero from "./Sections/Hero";
import Success from "./Sections/Success";
import OurPrograms from "./Sections/OurPrograms";
import Achievements from "./Sections/Achievements";
import Testimonial from "./Sections/Testimonial";
import Blogs from "./Sections/Blogs";
import Contact from "../../pages/contact";

const HomeMain = () => {
  return (
    <div>
      <Head>
        <title>RocketShip Education</title>
        <meta property="og:title" content="RocketShip Education" key="title" />
      </Head>
      <Hero />
      <Success />
      <OurPrograms />
      <Achievements />
      <Testimonial />
      <Blogs />
      <Contact />
    </div>
  );
};

export default HomeMain;
