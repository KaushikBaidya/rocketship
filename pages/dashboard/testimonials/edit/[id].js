import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/dashboard/TopHeader";
import axios from "axios";
import Private from "../../../../components/private";

function Details() {
  Private();

  const [data, setData] = useState();
  const [updatedTitle, setUpdatedTitle] = useState(data?.title);
  const [updatedDescription, setUpdatedDescription] = useState(
    data?.description
  );
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const handleSubmit = async (testimonialId) => {
    console.log(testimonialId);
    await axios
      .put(`/api/testimonials/${testimonialId}`, {
        title: updatedTitle,
        description: updatedDescription,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response.data.message);
        } else {
          console.log("failed to post data");
        }
      });
  };

  useEffect(() => {
    const handleData = async () => {
      const result = await axios.get(`/api/testimonials/${id}`);
      // console.log(result.data[0]);
      setData(result.data[0]);
    };
    handleData();
  }, [id]);
  // console.log(data);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit testimonials"
        btn="Return"
        path="/dashboard/testimonials"
      />

      <div>
        <form>
          <div>
            <input />
            <label
              htmlFor="title"
              className="block text-sm font-semibold text-gray-800"
            >
              Title
            </label>
            <input
              type="text"
              defaultValue={data?.title}
              onChange={(e) => {
                setUpdatedTitle(e.target.value);
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
            <input
              type="file"
              placeholder="Title..."
              onChange={(e) => {
                setTitle(e.target.value);
              }}
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
              defaultValue={data?.description}
              onChange={(e) => {
                setUpdatedDescription(e.target.value);
              }}
              className="block w-full h-[300px] px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              onClick={() => handleSubmit(data?.testimonialId)}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
