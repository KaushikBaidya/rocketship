import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/Loader";
import { Error } from "../../../../components/Error";
import TestimonialForm from "../../../../components/forms/TestimonialForm";

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
  } = useGetData("achievement", `/testimonials/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit testimonials"
        btn="Return"
        path="/dashboard/testimonials"
      />

      {data && (
        <TestimonialForm
          defaultValues={{
            testimonialId: data.testimonialId,
            title: data.title,
            description: data.description,
            img: data.img,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/testimonials/${data.testimonialId}`}
          returnPath="/dashboard/testimonials"
        />
      )}
    </div>
  );
}

export default Details;
