import Blogs from "../views/components/comps/Blogs";
import Contact from "../views/components/comps/Contact";
import Hero from "../views/components/comps/Hero";
import OurPrograms from "../views/components/comps/OurPrograms";
import Testimonial from "../views/components/comps/Testimonial";
import Achievements from "../views/components/comps/Achievements";
import Success from "../views/components/comps/Success";
import Head from "next/head";

export default function Home() {
  return (
    <main>
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
    </main>
  );
}
