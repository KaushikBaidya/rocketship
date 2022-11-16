import { getTestimonials } from "../../data/testimonials";

export default async function handler(req, res) {
  const result = await getTestimonials();
  res.json(result);
}
