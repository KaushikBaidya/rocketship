import {
  getAboutHero,
  updateAboutHero,
} from "../../../controller/AboutHeroController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getAboutHero();
      res.json(result);
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateSubtitle = req.body.subtitle;
      const updateImage = req.body.image;

      result = await updateAboutHero(updateTitle, updateSubtitle, updateImage);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
