import HeroSection from "../components/client/home/HeroSection";
import OurPrograms from "../components/client/home/OurPrograms";
import CollegeCoaching from "../components/client/home/CollegeCoaching";
import OtherPrograms from "../components/client/home/OtherPrograms";
import Connect from "../components/client/home/Connect";
import VisaProcess from "../components/client/home/VisaProcess";
import Apply from "../components/common/Apply";
import MetaComponents from "../components/MetaComponents";
import BlogsSection from "../components/client/home/BlogsSection";
import Institutions from "../components/client/home/Institutions";
import StudentTestimonial from "../components/client/home/StudentTestimonial";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/home/homeView`);
  const data = await res.json();
  return { props: { data } };
}

// export async function getStaticProps() {
//   const res = await fetch(`${process.env.BASE_URL}/api/home/homeView`);
//   const data = await res.json();
//   return { props: { data } };
// }

// export async function getServerSideProps() {
//   const res = await fetch(`https://rocketshipedu.com/api/home/homeView`);
//   const data = await res.json();
//   return { props: { data } };
// }

export default function Index({ data }) {
  const { hero, seo, testimonial, institution, visa, blogs } = data;
  return (
    <main>
      <MetaComponents
        title={seo.title}
        keywords={seo.keywords}
        description={seo.description}
        imageUrl={seo.image}
        appId={seo.facebookApp}
      />
      <HeroSection data={hero} />
      <CollegeCoaching />
      <OurPrograms />
      <Institutions data={institution} />
      <StudentTestimonial data={testimonial} />
      <VisaProcess data={visa} />
      <OtherPrograms />
      <Apply />
      <BlogsSection data={blogs} />
      <Connect />
    </main>
  );
}
