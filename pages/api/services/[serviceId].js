import {
  getServiceById,
  createService,
  updateService,
  deleteServiceById,
} from "../../../data/service";

export default async function handler(req, res) {
  const serviceId = req.query.serviceId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getServiceById(serviceId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteServiceById(serviceId);
      res.json({
        ...result,
        message: `blog with serviceId: ${serviceId} deleted`,
      });
      break;

    case "POST":
      const title = req.body.title;
      const description = req.body.description;
      const img = req.body.filename;

      result = await createService(title, description, img);
      res.json({ ...result, message: `user with userId: ${title} created` });
      break;

    case "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;

      result = await updateService(serviceId, updateTitle, updateDescription);
      res.json({ ...result, message: `blog with title: ${serviceId} updated` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
