import React from "react";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import VisaForm from "../../../../components/admin/forms/VisaForm";

function Details() {
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("visa", `/home/visa`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit Visa Process"
        btn="Return"
        path="/dashboard/home"
      />

      {tmp && (
        <VisaForm
          defaultValues={{
            visaId: tmp.visaId,
            title: tmp.title,
            subtitle: tmp.subtitle,
            subtitle2: tmp.subtitle2,
            image: tmp.image,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`home/visa`}
          returnPath="/dashboard/home"
        />
      )}
    </div>
  );
}

export default Details;
