import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import BlogsForm from "../../../../components/admin/forms/BlogsForm";

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
  } = useGetData("blogs", `/blogs/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit Blogs" btn="Return" path="/dashboard/blog" />

      {tmp && (
        <BlogsForm
          defaultValues={{
            blogId: tmp.blogId,
            title: tmp.title,
            description: tmp.description,
            permalink: tmp.permalink,
            keywords: tmp.keywords,
            seoDescription: tmp.seoDescription,
            img: tmp.img,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/blogs/${tmp.blogId}`}
          returnPath="/dashboard/blog"
        />
      )}
    </div>
  );
}

export default Details;
