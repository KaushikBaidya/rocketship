import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TopHeader from "../../../components/dashboard/TopHeader";

const AddBlog = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    await axios.post("/api/blogs/createBlog", data).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      } else {
        console.log("failed to post data");
      }
    });
    reset();
  };

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New Blog Post"
        btn="Return"
        path="/dashboard/post"
      />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Title..."
              {...register("title")}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-semibold text-gray-800"
            >
              Description
            </label>
            <textarea
              type="text"
              placeholder="Description..."
              {...register("description")}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={onSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
