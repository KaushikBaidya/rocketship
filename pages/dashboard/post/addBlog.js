import React, { useState } from "react";
import axios from "axios";
import TopHeader from "../../../components/dashboard/TopHeader";
import InputFile from "../../../components/layout/InputFile";
import Image from "next/image";
import Private from "../../../components/private";

const AddBlog = () => {
  Private();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    await axios.post("/api/blogs/createBlog", {
      title: title,
      filename: file,
      description: description,
    });
    // .then((response) => {
    //   if (response.data.message) {
    //     console.log(response.data.message);
    //   } else {
    //     console.log("failed to post data");
    //   }
    // });
  };

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Add New Blog Post"
        btn="Return"
        path="/dashboard/post"
      />
      <div>
        <form>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Upload Image
            </label>
            {/* <input
              type="file"
              name="photo"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            /> */}

            {file.length > 0 ? (
              <Image
                // src={`https://lh3.googleusercontent.com/d/${file}=s220?authuser=0`}
                src={`https://drive.google.com/thumbnail?id=${file}`}
                // src={`https://drive.google.com/uc?export=view&id=${file}`}
                alt="PHOTO"
                height={300}
                width={300}
              />
            ) : (
              <span></span>
            )}
            <InputFile
              name="photo"
              label="Photo"
              accept="image/*"
              action={setFile}
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
              name="description"
              placeholder="Description..."
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={handleSubmit}
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
