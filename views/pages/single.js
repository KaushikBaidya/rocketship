import Image from "next/image";
import React from "react";

import BlogImg from "../../public/st1.jpg";

const SingleBlog = () => {
  return (
    <div className="w-full py-28">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-[24px] text-[#211A56] font-semibold lg:text-[45px] text-left px-5 uppercase tracking-wide">
          How to make use of your free time to study
        </h1>
        <p className="text-[10px] text-[#F11924] font-semibold lg:text-[14px] text-left px-5 uppercase tracking-wide">
          Author: Jenny
        </p>
        <div className="w-1/2 mx-auto">
          <Image src={BlogImg} alt="" />
        </div>
        <p className="text-[16px] text-[#0e0c20] lg:text-[20px] px-5 text-justify">
          Finding a job is not easy, especially in times of economic turmoil.
          You often need to compete with hundreds of other candidates for a
          vacant position. In addition, the lower the education level, the
          greater the number of people applying for the same low-paying
          entry-level post. However, with the right qualifications and
          educational background, you will increase your chances of landing a
          fulfilling job. Would you like to find a way to stand out from a pool
          of applicants? Learn, educate yourself, graduate and get as many
          qualifications, skills, knowledge, and experience as possible. People
          with higher education and varied experience are more likely to get
          high-paying, expert jobs. Study hard, dedicate your time and effort to
          acquire knowledge and reach a high level of competence if you would
          like to lead a comfortable lifestyle. Your credentials are what will
          motivate a potential employer to choose you instead of another
          candidate. Studying hard throughout your school and studies shows you
          are not afraid of hard work and are able to fulfill your goals.
          Employers see this as a huge advantage as they all prefer a
          responsible and knowledgeable workforce. Once you graduate, you can
          start searching for jobs that will give you the opportunity to
          practice what you have learned and, at the same time, secure
          sufficient pay for your needs. One of the benefits of education is
          that the educational system teaches us how to obtain and develop
          critical and logical thinking and make independent decisions. When
          children become adults, they are faced with a lot of challenging
          issues – pay off your student loans, get a job, buy a car and a house,
          provide for your family, etc. However, if one has spent years
          educating themselves, they should be able to make sound decisions on
          these various quandaries. Not only are people able to form their own
          opinions, but they are also good at finding solid and reliable
          arguments and evidence to back up and confirm their decisions.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
