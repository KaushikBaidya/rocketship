import Head from "next/head";
import Hero from "./Sections/Hero";
import Success from "./Sections/Success";
import OurPrograms from "./Sections/OurPrograms";
import Achievements from "./Sections/Achievements";
import Testimonial from "./Sections/Testimonial";
import Blogs from "./Sections/Blogs";
import Contact from "../../pages/Contact";

const HomeMain = () => {
  const seo = {
    title: "RocketShip Education",
    description: "description",
    fbAppId: "",
  };
  return (
    <div>
      <Head>
        <title>{seo.title} </title>
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="http://www.example.com/images/gallary/front.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="/" />
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
