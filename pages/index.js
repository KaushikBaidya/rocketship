import Blogs from "./components/comps/Blogs";
import Contact from "./components/comps/Contact";
import Hero from "./components/comps/Hero";
import OurPrograms from "./components/comps/OurPrograms";
// import Services from "./components/comps/Achievements";
import Testimonial from "./components/comps/Testimonial";
import Achievements from "./components/comps/Achievements";
import Success from "./components/comps/Success";
import Head from "next/head";

export default function Home() {
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
}
