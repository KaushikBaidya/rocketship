import Head from "next/head";
import React from "react";
// import Image from "next/image";
// import Banner from "../../public/banner.jpg";
import Apply from "../components/common/Apply";

const ContactUs = () => {
  return (
    <section className="py-28">
      <Head>
        <title>Contact Us | Rocketship Education </title>
        <meta
          property="og:title"
          content="Rocketship Education will guide you through College Admissions in United States"
          key="title"
        />
      </Head>
      <Apply />
    </section>
  );
};

export default ContactUs;
