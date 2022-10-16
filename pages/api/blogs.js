import { getBlogs } from "../../data/blogs";

export default async function handler(req, res) {
  const result = await getBlogs();
  res.json(result);
}
