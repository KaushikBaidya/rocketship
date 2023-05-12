import {
  getHomeSeo,
  updateHomeSeo,
} from "../../../controller/HomeSEOController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getHomeSeo();
      res.json(result);
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;
      const updateKeywords = req.body.keywords;
      const updateFacebook = req.body.facebookApp;
      const updateGoogle = req.body.googleId;
      const updateImage = req.body.image;

      result = await updateHomeSeo(
        updateTitle,
        updateDescription,
        updateKeywords,
        updateFacebook,
        updateGoogle,
        updateImage
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
