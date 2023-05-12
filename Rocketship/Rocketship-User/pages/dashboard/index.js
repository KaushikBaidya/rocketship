import React from "react";
import BlogInfo from "../../components/admin/dashboard/Content/BlogInfo";
import TestimonialInfo from "../../components/admin/dashboard/Content/TestimonialInfo";
import Mycourses from "./user/mycourses";

const Dashboard = () => {
  return (
    <div>
      <div className="place-content-center">
        <Mycourses />
      </div>
    </div>
  );
};

export default Dashboard;
