import Blogs from "./components/comps/Blogs";
import Contact from "./components/comps/Contact";
import Hero from "./components/comps/Hero";
import OurPrograms from "./components/comps/OurPrograms";
// import Services from "./components/comps/Achievements";
import Testimonial from "./components/comps/Testimonial";
import Achievements from "./components/comps/Achievements";
import Success from "./components/comps/Success";

export default function Home() {
  return (
    <div>
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
