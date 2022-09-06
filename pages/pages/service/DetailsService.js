import React from "react";
import Feature from "./Feature";

const DetailsService = () => {
  const data = [
    {
      id: 0,
      img: "/service/1.png",
      title: "College Admissions Counseling ",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
    {
      id: 1,
      img: "/service/1.png",
      title: "Essay Editing Services ",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
    {
      id: 2,
      img: "/service/1.png",
      title: "Financial Planning Assistance",
      des: "Work with our expert nursing school admissions consultants to fine-tune every detail of your NursingCAS application. Our experts advise you on every aspect of your BSN application including school selection, crafting the perfect essays, applying for the right scholarships, interview prep, and more.",
    },
  ];
  return (
    <>
      {data.length > 0 &&
        data.map((data, index) => (
          <Feature key={index.toString()} data={data} />
        ))}
    </>
  );
};

export default DetailsService;
