import {
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitutionId,
} from "../../../controller/institutionController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const institutionId = req.query.institutionId;
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getInstitutionById(institutionId);
      res.json(result);
      break;

    case session && "DELETE":
      result = await deleteInstitutionId(institutionId);
      res.json({
        ...result,
        message: `institution with institutionId: ${institutionId} deleted`,
      });
      break;

    case session && "POST":
      const name = req.body.name;
      const image = req.body.image;

      result = await createInstitution(name, image);
      res.status(201).json({
        ...result,
        message: `institution with name: ${name} created`,
      });
      break;

    case session && "PUT":
      const updateName = req.body.name;
      const updateImage = req.body.image;

      result = await updateInstitution(institutionId, updateName, updateImage);
      res.status(204).end("end");
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
