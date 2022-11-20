import TopHeader from "../../../components/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import BlogsForm from "../../../components/forms/BlogsForm";

const Add = () => {
  const defaultValues = {
    blogId: "",
    title: "",
    description: "",
    filepath: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Add New Blog" btn="Return" path="/dashboard/blog" />
      <BlogsForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/blogs/createBlog"
        returnPath="/dashboard/blog"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
