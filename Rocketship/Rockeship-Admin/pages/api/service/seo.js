import {
  getServiceSeo,
  updateServiceSeo,
} from "../../../controller/ServiceSEOController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getServiceSeo();
      res.json(result);
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;
      const updateKeywords = req.body.keywords;
      const updatefacebook = req.body.facebookApp;
      const updateImage = req.body.image;

      result = await updateServiceSeo(
        updateTitle,
        updateDescription,
        updateKeywords,
        updatefacebook,
        updateImage
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
