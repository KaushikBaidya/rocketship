import { unpublishBlog } from "../../../controller/blogsController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const blogId = req.query.blogId;
  const method = req.method;

  let result;
  switch (method) {
    case session && "PUT":
      result = await unpublishBlog(blogId);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
