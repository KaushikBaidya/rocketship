import { getBlogsPublished } from "../../../controller/blogsController";
import { getHomeHero } from "../../../controller/homeHeroController";
import { getHomeSeo } from "../../../controller/HomeSEOController";
import { getVisa } from "../../../controller/homeVisaController";
import { getInstitution } from "../../../controller/institutionController";
import { getTestimonials } from "../../../controller/testimonialsController";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "GET":
      const seo = await getHomeSeo();
      const hero = await getHomeHero();
      const testimonial = await getTestimonials();
      const institution = await getInstitution();
      const visa = await getVisa();
      const blogs = await getBlogsPublished();
      res.json({ hero, seo, testimonial, institution, visa, blogs });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
