import {
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonialId,
} from "../../../controller/testimonialsController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const testimonialId = req.query.testimonialId;
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getTestimonialById(testimonialId);
      res.json(result);
      break;

    case session && "DELETE":
      result = await deleteTestimonialId(testimonialId);
      res.json({
        ...result,
        message: `testimonial with testimonialId: ${testimonialId} deleted`,
      });
      break;

    case session && "POST":
      const title = req.body.title;
      const description = req.body.description;
      const designation = req.body.designation;
      const img = req.body.img;

      result = await createTestimonial(title, description, designation, img);
      res.status(201).json({
        ...result,
        message: `testimonial with title: ${title} created`,
      });
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;
      const updateDesignation = req.body.designation;
      const updateImg = req.body.img;

      result = await updateTestimonial(
        testimonialId,
        updateTitle,
        updateDescription,
        updateDesignation,
        updateImg
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
