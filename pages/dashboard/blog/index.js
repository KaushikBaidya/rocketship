import React from "react";
import EditButton from "../../../components/dashboard/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import DeleteButton from "../../../components/dashboard/button/DeleteButton";
import { Loader } from "../../../components/Loader";
import { Error } from "../../../components/Error";

export default function Index() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("blogs", `/getBlogs`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  return (
    <div className="card w-full">
      <TopHeader title="Blogs List" btn="Save" path="/dashboard/blog/Add" />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          <ListHeader label="" />
        </div>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.blogId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/dashboard/blog/edit/${item.blogId}`} />
                  <DeleteButton
                    path={`/blogs/${item.blogId}`}
                    action={refetch}
                  />
                </div>
              </div>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {data.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
