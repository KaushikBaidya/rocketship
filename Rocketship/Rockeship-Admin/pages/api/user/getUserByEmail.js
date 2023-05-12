import { getUser } from "../../../controller/userController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const email = req.query.email;

  console.log(email);

  if (session) {
    const result = await getUser(email);
    res.json(result);
  } else {
    res.json({ message: "unauthenticated user" });
  }
}
