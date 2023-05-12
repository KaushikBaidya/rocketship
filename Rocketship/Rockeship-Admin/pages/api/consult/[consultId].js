import {
  getConsultById,
  createConsult,
} from "../../../controller/consultController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  const consultId = req.query.consultId;
  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getConsultById(consultId);
      res.json(result);
      break;

    // case "DELETE":
    //   result = await deleteConsultById(consultId);
    //   res.json({
    //     ...result,
    //     message: `consult with consultId: ${consultId} deleted`,
    //   });
    //   break;

    case "POST":
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const phone = req.body.phone;
      const consultdate = req.body.consultdate;
      const consulttime = req.body.consulttime;
      const details = req.body.details;

      result = await createConsult(
        firstname,
        lastname,
        email,
        phone,
        consultdate,
        consulttime,
        details
      );
      res.status(201).json({
        ...result,
        message: `consult created`,
      });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
