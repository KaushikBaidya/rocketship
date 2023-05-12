import React from "react";
import TopHeader from "../../../components/admin/dashboard/TopHeader";

import {
  FiBox,
  FiGlobe,
  // FiHelpCircle,
  // FiPackage,
  // FiPieChart,
  // FiUsers,
} from "react-icons/fi";
import Link from "next/link";
// import { AiFillBank } from "react-icons/ai";

const BlogsList = () => {
  return (
    <main>
      <div className="card w-full max-w-screen-xl">
        <TopHeader title="Edit Service Page" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            className="bg-gray-200 grid place-items-center p-2 hover:bg-darker hover:text-gray-300 rounded-lg gap-2"
            href="/dashboard/service/hero/edit"
          >
            <FiBox size={40} />
            <span className="font-medium text-center">Hero Section</span>
          </Link>
          {/* <Link
            className="bg-gray-200 grid place-items-center p-2 hover:bg-darker hover:text-gray-300 rounded-lg gap-2"
            href="/dashboard/home/counselling/edit"
          >
            <FiUsers size={40} />
            <span className="font-medium text-center">College Guidance</span>
          </Link> */}
          {/* <Link
            className="bg-gray-200 grid place-items-center p-2 hover:bg-darker hover:text-gray-300 rounded-lg gap-2"
            href="/dashboard/home/ourHelp/edit"
          >
            <FiPieChart size={40} />
            <span className="font-medium text-center">
              Innovative Counselling
            </span>
          </Link> */}
          {/* <Link
            className="bg-gray-200 grid place-items-center p-2 hover:bg-darker hover:text-gray-300 rounded-lg gap-2"
            href="/dashboard/home/institutions/edit"
          >
            <AiFillBank size={40} />
            <span className="font-medium text-center">Institutions</span>
          </Link> */}

          <Link
            className="bg-gray-200 grid place-items-center p-2 hover:bg-darker hover:text-gray-300 rounded-lg gap-2"
            href="/dashboard/service/seo/edit"
          >
            <FiGlobe size={40} />
            <span className="font-medium text-center">SEO</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogsList;
