import { axios } from "axios";

export const usePost = () => {
  axios
    .post("/api/blogs/createBlog", {
      title: title,
      description: description,
    })
    .then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
      } else {
        console.log("failed to post data");
      }
    });
};

export const useGet = async () => {
  const result = await axios.get(`/api/blogs/${id}`);
  // console.log(result.data[0]);
  setData(result.data[0]);
};

export const UseDelete = async ({ path }) => {
  // const confirm = window.confirm("Do you want to delete this?");
  if (confirm) {
    await axios.delete(path).then(() => {
      console.log("deleted");
    });
    const remaining = data.filter((item) => item.blogId !== blogId);
    setData(remaining);
  }
  return <button>delete</button>;
};
