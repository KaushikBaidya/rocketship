import { getBlogsPublished } from "../../../controller/blogsController";
import { getInstitution } from "../../../controller/institutionController";
import { getServiceHero } from "../../../controller/ServiceHeroController";
import { getServiceSeo } from "../../../controller/ServiceSEOController";
import { getTestimonials } from "../../../controller/testimonialsController";

export default async function handler(req, res) {
  const method = req.method;

  switch (method) {
    case "GET":
      const seo = await getServiceSeo();
      const hero = await getServiceHero();
      const institution = await getInstitution();
      const testimonial = await getTestimonials();
      const blogs = await getBlogsPublished();
      res.json({ hero, seo, testimonial, blogs, institution });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
