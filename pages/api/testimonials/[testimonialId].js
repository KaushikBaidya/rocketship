import {
    getTestimonialById,
    createTestimonial,
    updateTestimonial,
    deleteTestimonialId,
} from "../../../data/testimonials";

export default async function handler(req, res) {
    const testimonialId = req.query.testimonialId;
    const method = req.method;

    let result;
    switch (method) {
        case "GET":
            result = await getTestimonialById(testimonialId);
            res.json(result);
            break;

        case "DELETE":
            result = await deleteTestimonialId(testimonialId);
            res.json({ ...result, message: `blog with testimonialId: ${testimonialId} deleted` });
            break;

        case "POST":
            const title = req.body.title;
            const description = req.body.description;

            result = await createTestimonial(title, description);
            res.json({ ...result, message: `user with userId: ${title} created` });
            break;

        case "PUT":
            const updateTitle = req.body.title;
            const updateDescription = req.body.description;

            result = await updateTestimonial(testimonialId, updateTitle, updateDescription);
            res.json({ ...result, message: `blog with title: ${testimonialId} updated` });
            break;

        default:
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
