import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import TestimonialForm from "../../../../components/admin/forms/TestimonialForm";

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
  } = useGetData("testimonials", `/testimonials/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;
  console.log(tmp);

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit testimonials"
        btn="Return"
        path="/dashboard/testimonials"
      />

      {tmp && (
        <TestimonialForm
          defaultValues={{
            testimonialId: tmp.testimonialId,
            title: tmp.title,
            description: tmp.description,
            designation: tmp.designation,
            img: tmp.img,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/testimonials/${tmp.testimonialId}`}
          returnPath="/dashboard/testimonials"
        />
      )}
    </div>
  );
}

export default Details;
