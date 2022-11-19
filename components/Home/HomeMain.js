import Contact from "../../pages/Contact";
import Achievements from "./Sections/Achievements";
import Blogs from "./Sections/Blogs";
import Hero from "./Sections/Hero";
import OurPrograms from "./Sections/OurPrograms";
import Success from "./Sections/Success";
import Testimonial from "./Sections/Testimonial";

const HomeMain = () => {
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
};

export default HomeMain;
