import React from "react";
import HeroAbout from "../components/client/about/HeroAbout";
import HowWeWork from "../components/client/about/HowWeWork";
import OurTeam from "../components/client/about/OurTeam";
import Banner from "../components/client/about/Banner";
import Connect from "../components/client/about/Connect";
import Apply from "../components/common/Apply";
import BlogsSection from "../components/client/home/BlogsSection";
import MetaComponents from "../components/MetaComponents";
// import Instructors from "../components/client/about/Instructors";

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/about/aboutView`);
//   const data = await res.json();
//   return { props: { data } };
// }
export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/about/aboutView`);
  const data = await res.json();
  return { props: { data } };
}

const AboutUs = ({ data }) => {
  const { hero, seo, blogs } = data;
  return (
    <main className="relative">
      <MetaComponents
        title={seo.title}
        keywords={seo.keywords}
        description={seo.description}
        imageUrl={seo.image}
        appId={seo.facebookApp}
      />
      <HeroAbout data={hero} />
      <Banner />
      <HowWeWork />
      <OurTeam />
      {/* <Instructors /> */}
      <Apply />
      <BlogsSection data={blogs} />
      <Connect />
    </main>
  );
};

export default AboutUs;
