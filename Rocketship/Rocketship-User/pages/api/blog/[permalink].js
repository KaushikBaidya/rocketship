import { getBlogPermalink } from "../../../controller/blogsController";

export default async function handler(req, res) {
  const permalink = req.query.permalink;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getBlogPermalink(permalink);
      res.json(result);
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
