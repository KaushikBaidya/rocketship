import React from "react";
import Apply from "../components/common/Apply";
import Faq from "../components/client/service/Faqs";
import HeroService from "../components/client/service/HeroService";
import KeyToSuccess from "../components/client/service/KeyToSuccess";
import Table from "../components/client/service/Table";
import Trusted from "../components/client/service/Trusted";
import InnovativeCounselling from "../components/client/service/InnovativeCounselling";
import CollegeGuidance from "../components/client/service/CollegeGuidance";
import BlogsSection from "../components/client/home/BlogsSection";
import MetaComponents from "../components/MetaComponents";
import Institutions from "../components/client/home/Institutions";
import StudentsTestimonials from "../components/client/service/StudentsTestimonials";

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/service/serviceView`);
//   const data = await res.json();
//   return { props: { data } };
// }
export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/service/serviceView`);
  const data = await res.json();
  return { props: { data } };
}

const OurService = ({ data }) => {
  const { hero, seo, testimonial, institution, blogs } = data;

  return (
    <main className="relative">
      <MetaComponents
        title={seo.title}
        keywords={seo.keywords}
        description={seo.description}
        imageUrl={seo.image}
        appId={seo.facebookApp}
      />
      <HeroService data={hero} />
      <CollegeGuidance />
      <Institutions data={institution} />
      <InnovativeCounselling />
      {/* <Numbers /> */}
      <Trusted />
      <Table />
      <StudentsTestimonials data={testimonial} />
      <KeyToSuccess />
      <Apply />
      <Faq />
      <BlogsSection data={blogs} />
    </main>
  );
};

export default OurService;
