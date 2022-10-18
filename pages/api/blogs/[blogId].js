import {
  getBlogById,
  deleteBlogById,
  createBlog,
  updateBlog,
} from "../../../data/blogs";

export default async function handler(req, res) {
  const blogId = req.query.blogId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getBlogById(blogId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteBlogById(blogId);
      res.json({ ...result, message: `blog with blogId: ${blogId} deleted` });
      break;

    case "POST":
      const title = req.body.title;
      const description = req.body.description;

      result = await createBlog(title, description);
      res.json({ ...result, message: `user with userId: ${title} created` });
      break;

    case "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;

      result = await updateBlog(blogId, updateTitle, updateDescription);
      res.json({ ...result, message: `blog with title: ${blogId} updated` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
