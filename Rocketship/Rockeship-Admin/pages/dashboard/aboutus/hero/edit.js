import React from "react";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import HeroForm from "../../../../components/admin/forms/HeroForm";

function Details() {
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("hero", `/about/hero`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit About Us Hero Section"
        btn="Return"
        path="/dashboard/aboutus"
      />

      {tmp && (
        <HeroForm
          defaultValues={{
            heroId: tmp.heroId,
            title: tmp.title,
            subtitle: tmp.subtitle,
            image: tmp.image,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/about/hero`}
          returnPath="/dashboard/aboutus"
        />
      )}
    </div>
  );
}

export default Details;
