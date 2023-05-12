import { getBlogsPublished } from "../../controller/blogsController";

export default async function handler(req, res) {
  const result = await getBlogsPublished();
  res.json(result);
}
