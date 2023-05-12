import {
  getBlogById,
  deleteBlogById,
  createBlog,
  updateBlog,
} from "../../../controller/blogsController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const blogId = req.query.blogId;
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getBlogById(blogId);
      res.json(result);
      break;

    case session && "DELETE":
      result = await deleteBlogById(blogId);
      res.json({ ...result, message: `blog with blogId: ${blogId} deleted` });
      break;

    case session && "POST":
      const title = req.body.title;
      const description = req.body.description;
      const keywords = req.body.keywords;
      const seoDescription = req.body.seoDescription;
      const permalink = req.body.permalink;
      const img = req.body.img;

      result = await createBlog(
        title,
        description,
        permalink,
        keywords,
        seoDescription,
        img
      );
      res
        .status(201)
        .json({ ...result, message: `blog with title: ${title} created` });
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;
      const updatePermalink = req.body.permalink;
      const updateKeywords = req.body.keywords;
      const updateSeoDescription = req.body.seoDescription;
      const updateImg = req.body.img;

      result = await updateBlog(
        blogId,
        updateTitle,
        updateDescription,
        updatePermalink,
        updateKeywords,
        updateSeoDescription,
        updateImg
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
