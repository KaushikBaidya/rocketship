import React from "react";
import {
  ListCol,
  ListHeader,
} from "../../../components/admin/dashboard/ListColWithHeader";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";
import format from "date-fns/format";
import DetailsButton from "../../../components/common/button/DetailsButton";

const BlogsList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("consults", `/getAllConsults`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <main>
      <div className="card w-full">
        <TopHeader title="Students List for consultation" />

        <div className="list-wrapper">
          <div className="md:grid grid-cols-5 list-header">
            <ListHeader label="First Name" />
            <ListHeader label="Last Name" />
            {/* <ListHeader label="Email" /> */}
            {/* <ListHeader label="Phone" /> */}
            <ListHeader label="Consult date" />
            <ListHeader label="Consult time" />
            <ListHeader label="" />
          </div>
          {tmp.length > 0 &&
            tmp.map((item) => (
              <div
                key={item.consultId}
                className="grid grid-cols-1 md:grid-cols-5 list-body"
              >
                <ListCol label="First Name :" value={item.firstname} />
                <ListCol label="Last Name :" value={item.lastname} />
                {/* <ListCol label="Email :" value={item.email} /> */}
                {/* <ListCol label="Phone :" value={item.phone} /> */}
                <ListCol
                  label="Consult date :"
                  value={format(new Date(item.consultdate), "dd/MMM/yyyy")}
                />
                {/* <ListCol
                  label="Consult time :"
                  value={format(new Date(item.consulttime), "hh:mm aa")}
                /> */}
                <ListCol label="Consult time :" value={item.consulttime} />

                <div>
                  <div className="flex justify-end space-x-2">
                    <DetailsButton
                      path={`/dashboard/consultation/details/${item.consultId}`}
                    />
                  </div>
                </div>
              </div>
            ))}

          <div className="list-footer">
            <div className="col-span-10"></div>
            <div className="flex justify-center">
              <span className="font-semibold">TOTAL : {tmp.length}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogsList;
