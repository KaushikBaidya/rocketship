import React from "react";
import BlogInfo from "../../components/admin/dashboard/Content/BlogInfo";
import TestimonialInfo from "../../components/admin/dashboard/Content/TestimonialInfo";

const Dashboard = () => {
  return (
    <div>
      <h1 className="container mx-auto text-4xl font-medium p-5">Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center">
        <BlogInfo />
        <TestimonialInfo />
      </div>
    </div>
  );
};

export default Dashboard;
