import React from "react";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
// import SeoForm from "../../../../components/admin/forms/SeoForm";
import HomeSeoForm from "../../../../components/admin/forms/HomeSeoForm";

function Details() {
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("seo", `/home/seo`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit Home SEO Section"
        btn="Return"
        path="/dashboard/home"
      />

      {tmp && (
        <HomeSeoForm
          defaultValues={{
            seoId: tmp.seoId,
            title: tmp.title,
            description: tmp.description,
            keywords: tmp.keywords,
            facebookApp: tmp.facebookApp,
            googleId: tmp.googleId,
            image: tmp.image,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/home/seo`}
          returnPath="/dashboard/home"
        />
      )}
    </div>
  );
}

export default Details;
