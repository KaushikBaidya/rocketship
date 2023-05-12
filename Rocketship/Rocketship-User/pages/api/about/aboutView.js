import { getAboutHero } from "../../../controller/AboutHeroController";
import { getAboutSeo } from "../../../controller/AboutSEOController";
import { getBlogsPublished } from "../../../controller/blogsController";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "GET":
      const seo = await getAboutSeo();
      const hero = await getAboutHero();
      const blogs = await getBlogsPublished();
      res.json({ hero, seo, blogs });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
