import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import InstitutionForm from "../../../../components/admin/forms/InstitutionForm";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("institution", `/institution/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit institution"
        btn="Return"
        path="/dashboard/institution"
      />

      {tmp && (
        <InstitutionForm
          defaultValues={{
            institutionId: tmp.institutionId,
            name: tmp.name,
            image: tmp.image,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/institution/${tmp.institutionId}`}
          returnPath="/dashboard/institution"
        />
      )}
    </div>
  );
}

export default Details;
