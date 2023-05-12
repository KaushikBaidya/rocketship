import React from "react";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";

import SeoForm from "../../../../components/admin/forms/SeoForm";

function Details() {
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("seo", `/service/seo`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit Service SEO Section"
        btn="Return"
        path="/dashboard/service"
      />

      {tmp && (
        <SeoForm
          defaultValues={{
            seoId: tmp.seoId,
            title: tmp.title,
            description: tmp.description,
            keywords: tmp.keywords,
            facebookApp: tmp.facebookApp,
            image: tmp.image,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/service/seo`}
          returnPath="/dashboard/service"
        />
      )}
    </div>
  );
}

export default Details;
