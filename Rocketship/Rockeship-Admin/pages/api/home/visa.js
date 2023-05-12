import { getVisa, updateVisa } from "../../../controller/homeVisaController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getVisa();
      res.json(result);
      break;

    case session && "PUT":
      const updateTitle = req.body.title;
      const updateSubtitle = req.body.subtitle;
      const updateSubtitle2 = req.body.subtitle2;
      const updateImage = req.body.image;

      result = await updateVisa(
        updateTitle,
        updateSubtitle,
        updateSubtitle2,
        updateImage
      );
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
