import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import format from "date-fns/format";

function Details() {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("consult", `/consult/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="See Student Details"
        btn="Return"
        path="/dashboard/consultation"
      />
      {tmp && (
        <div className="grid gap-4">
          <p>
            Name : <span>{tmp.firstname}</span> <span>{tmp.lastname}</span>
          </p>
          <p>
            Email : <span>{tmp.email}</span>
          </p>
          <p>
            Phone : <span>{tmp.phone}</span>
          </p>
          <p>
            Date :{" "}
            <span>{format(new Date(tmp.consultdate), "dd/MMM/yyyy")}</span>
          </p>
          <p>
            Time : <span>{tmp.consulttime}</span>
          </p>
          <div>
            details : <span>{tmp.details}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
