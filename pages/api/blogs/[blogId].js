import { getBlogById, deleteBlogById, createBlog } from "../../../data/blogs";

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

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
