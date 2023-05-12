import React from "react";
import EditButton from "../../../components/common/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/admin/dashboard/ListColWithHeader";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import DeleteButton from "../../../components/common/button/DeleteButton";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";

export default function InstitutionList() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("institution", `/getAllInstitution`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full">
      <TopHeader
        title="Institution List (minimum five institutions must be here)"
        btn="Save"
        path="/dashboard/institution/add"
      />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-2 list-header">
          <ListHeader label="name" />
          <ListHeader label="" />
        </div>
        {tmp.length > 0 &&
          tmp.map((item) => (
            <div
              key={item.testimonialId}
              className="grid grid-cols-1 md:grid-cols-2 list-body"
            >
              <ListCol label="Title :" value={item.name} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/institution/edit/${item.institutionId}`}
                  />
                  <DeleteButton
                    path={`/institution/${item.institutionId}`}
                    action={refetch}
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
  );
}
