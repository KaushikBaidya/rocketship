import React, { useEffect, useState } from "react";
import EditButton from "../../../components/dashboard/button/EditButton";
import { useRouter } from "next/router";
import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";
import axios from "axios";

export default function Add() {
  const router = useRouter();
  const [data, setData] = useState();

  const handleDelete = async (blogId) => {
    const confirm = window.confirm("Do you want to delete this?");
    if (confirm) {
      await axios.delete(`/api/blogs/${blogId}`).then(() => {
        console.log("deleted");
      });
      const remaining = data.filter((item) => item.blogId !== blogId);
      setData(remaining);
    }
  };

  useEffect(() => {
    const handledata = async () => {
      const result = await fetch(`/api/blogs`);
      const data = await result.json();
      setData(data);
    };
    handledata();
  }, []);

  return (
    <div className="card w-full">
      <TopHeader title="Blogs List" btn="Save" path="/dashboard/post/addBlog" />

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
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/dashboard/post/edit/${item.blogId}`} />

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
