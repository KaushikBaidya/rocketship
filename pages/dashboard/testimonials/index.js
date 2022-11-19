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
  } = useGetData("testimonials", `/getTestimonials`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  console.log(data);

  return (
    <div className="card w-full">
      <TopHeader
        title="Testimonial List"
        btn="Save"
        path="/dashboard/testimonials/Add"
      />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-3 list-header">
          <ListHeader label="Title" />
          <ListHeader label="Description" />
          <ListHeader label="" />
        </div>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.testimonialId}
              className="grid grid-cols-1 md:grid-cols-3 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <ListCol label="Description :" value={item.description} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/testimonials/edit/${item.testimonialId}`}
                  />
                  <DeleteButton
                    path={`/testimonials/${item.testimonialId}`}
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
