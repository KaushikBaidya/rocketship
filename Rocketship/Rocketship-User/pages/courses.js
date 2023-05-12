import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Loader } from "../components/common/Loader";
import AllCourses from "../components/common/AllCourses";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPublishedBlogs`);
  const data = await res.json();
  return { props: { data } };
}

const Courses = ({ data }) => {
  // if (!data) return <Loader />;
  const tmp = data;
  return <AllCourses />;
};

export default Courses;
