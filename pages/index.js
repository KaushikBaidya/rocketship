import Blogs from "./components/comps/Blogs";
import Contact from "./components/comps/Contact";
import Hero from "./components/comps/Hero";
import OurPrograms from "./components/comps/OurPrograms";
import Services from "./components/comps/Services";
import Testimonial from "./components/comps/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <OurPrograms />
      <Services />
      <Testimonial />
      <Blogs />
      <Contact />
    </div>
  );
}
