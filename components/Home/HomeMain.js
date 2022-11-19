import Achievements from "./Sections/Achievements";
import Blogs from "./Sections/Blogs";
import Contacts from "./Sections/Contact";
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
      <Contacts />
    </div>
  );
};

export default HomeMain;
