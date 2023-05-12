import { getAllUsers } from "../../../controller/userController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ error: "Unauthenticated user" });
  }
  const result = await getAllUsers();
  res.json(result);
}
