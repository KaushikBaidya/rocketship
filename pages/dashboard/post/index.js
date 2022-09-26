import React from "react";
import EditButton from "../../../components/dashboard/button/EditButton";
import DeleteButton from "../../../components/dashboard/button/DeleteButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";

export default function Add() {
  const list = {
    data: [{ id: 0, title: "blog" }],
  };
  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Blogs List"
        btn="Save"
        path="/admin/settings/exam/add"
      />
      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          <ListHeader label="" />
        </div>
        {list.data.length > 0 &&
          list.data.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/admin/settings/exam/edit/${item.id}`} />
                  <DeleteButton
                    // action={refetch}
                    path={`/exam/delete/${item.id}`}
                  />
                </div>
              </div>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {list.data.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
