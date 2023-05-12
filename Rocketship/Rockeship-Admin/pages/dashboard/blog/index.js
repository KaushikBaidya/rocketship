import React from "react";
import EditButton from "../../../components/common/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/admin/dashboard/ListColWithHeader";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import DeleteButton from "../../../components/common/button/DeleteButton";
import PublishButton from "../../../components/common/button/PublishButton";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";
import UnpublishButton from "../../../components/common/button/UnpublishButton";

const BlogsList = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("blogs", `/getAllBlogs`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const tmp = list.data;
  return (
    <main>
      <div className="card w-full">
        <TopHeader title="Blogs List" btn="Save" path="/dashboard/blog/add" />

        <div className="list-wrapper">
          <div className="md:grid grid-cols-2 list-header">
            <ListHeader label="Title" />
            <ListHeader label="" />
          </div>
          {tmp.length > 0 &&
            tmp.map((item) => (
              <div
                key={item.blogId}
                className="grid grid-cols-1 md:grid-cols-2 list-body"
              >
                <ListCol label="Title :" value={item.title} />
                <div>
                  <div className="flex justify-end space-x-2">
                    <EditButton path={`/dashboard/blog/edit/${item.blogId}`} />
                    <DeleteButton
                      path={`/blogs/${item.blogId}`}
                      action={refetch}
                    />
                    {item.isPublished === 0 ? (
                      <PublishButton
                        path={`/publish/${item.blogId}`}
                        action={refetch}
                      />
                    ) : (
                      <UnpublishButton
                        path={`/unpublish/${item.blogId}`}
                        action={refetch}
                      />
                    )}
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
    </main>
  );
};

export default BlogsList;
