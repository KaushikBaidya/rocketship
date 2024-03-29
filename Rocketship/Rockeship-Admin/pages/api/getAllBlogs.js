import { getBlogs } from "../../controller/blogsController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    const result = await getBlogs();
    res.json(result);
  } else {
    res.json({ message: "unauthenticated user" });
  }
}
