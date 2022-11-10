import {
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonialId,
} from '../../../data/testimonials'

export default async function handler(req, res) {
  const testimonialId = req.query.testimonialId
  const method = req.method

  let result
  switch (method) {
    case 'GET':
      result = await getTestimonialById(testimonialId)
      res.json(result)
      break

    case 'DELETE':
      result = await deleteTestimonialId(testimonialId)
      res.json({
        ...result,
        message: `blog with testimonialId: ${testimonialId} deleted`,
      })
      break

    case 'POST':
      const title = req.body.title
      const description = req.body.description
      const img = req.body.filename

      result = await createTestimonial(title, description, img)
      res.json({
        ...result,
        message: `testimonial with title: ${title} created`,
      })
      break

    case 'PUT':
      const updateTitle = req.body.title
      const updateDescription = req.body.description
      const updateImg = req.body.filename

      result = await updateTestimonial(
        testimonialId,
        updateTitle,
        updateDescription,
        updateImg,
      )
      res.json({
        ...result,
        message: `Testimonial with title: ${testimonialId} updated`,
      })
      break

    default:
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
