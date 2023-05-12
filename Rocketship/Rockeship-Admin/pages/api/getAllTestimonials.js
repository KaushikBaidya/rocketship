import { getTestimonials } from "../../controller/testimonialsController";

async function handler(req, res) {
  const result = await getTestimonials();
  res.json(result);
}
export default handler;
