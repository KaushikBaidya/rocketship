import React, { useEffect, useState } from "react";
import EditButton from "../../../components/dashboard/button/EditButton";
// import DeleteButton from "../../../components/dashboard/button/DeleteButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";
import axios from "axios";

export default function Add() {
  const [data, setData] = useState();
  const handleDelete = (blogId) => {
    console.log(blogId);
    const confirm = window.confirm("Are you wants to delete ?");
    if (confirm) {
      fetch(`/api/blogs/${blogId}`, {
        method: "DELETE",
      });
      // const remaining = user.filter((data) => data._id !== id);
      // setuser(remaining);
    }
  };

  useEffect(() => {
    const handledata = async () => {
      const result = await fetch(`/api/blogs`);
      // console.log(result);
      const data = await result.json();
      // console.log(data);
      setData(data);
    };
    handledata();
  }, []);

  // const handledata = async () => {
  //   const result = await fetch(`/api/blogs`);
  //   // console.log(result);
  //   const data = await result.json();
  //   console.log(data);
  //   setData(data);
  // };

  return (
    <div className="card w-full">
      <TopHeader title="Blogs List" btn="Save" path="/dashboard/post/addBlog" />
      {/* <button onClick={handledata}>Click Me</button> */}
      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          <ListHeader label="" />
        </div>
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item.blogId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              {/* <ListCol label="Title :" value={item.blogId} /> */}
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/dashboard/post/edit/${item.id}`} />
                  {/* <DeleteButton
                    // action={refetch}
                    path={`/api/blogs/deleteBlogById/${item.blogId}`}
                  /> */}
                  <button onClick={() => handleDelete(item.blogId)}>
                    delete
                  </button>
                </div>
              </div>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {data?.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
