import React, { useEffect, useState } from "react";
import EditButton from "../../../components/dashboard/button/EditButton";

import {
  ListCol,
  ListHeader,
} from "../../../components/dashboard/ListColWithHeader";
import TopHeader from "../../../components/dashboard/TopHeader";
import axios from "axios";
import Private from "../../../components/private";

export default function Add() {
  Private();

  const [data, setData] = useState();

  const handleDelete = async (serviceId) => {
    const confirm = window.confirm("Do you want to delete this?");
    if (confirm) {
      await axios.delete(`/api/services/${serviceId}`).then(() => {
        console.log("deleted");
      });
      const remaining = data.filter((item) => item.serviceId !== serviceId);
      setData(remaining);
    }
  };

  useEffect(() => {
    const handledata = async () => {
      const result = await fetch(`/api/services`);
      const data = await result.json();
      setData(data);
    };
    handledata();
  }, []);

  return (
    <div className="card w-full">
      <TopHeader
        title="Services List"
        btn="Save"
        path="/dashboard/service/addService"
      />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="Title" />
          <ListHeader label="" />
        </div>
        {data?.length > 0 &&
          data.map((item) => (
            <div
              key={item.serviceId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.title} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/service/edit/${item.serviceId}`}
                  />

                  <button onClick={() => handleDelete(item.serviceId)}>
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
