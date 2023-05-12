const bcrypt = require("bcrypt");
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import {
  getUserById,
  deleteUserById,
  createUser,
} from "../../../controller/userController";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  const userId = req.query.id;

  const method = req.method;

  let result;
  switch (method) {
    case session && "GET":
      result = await getUserById(userId);
      res.json(result);
      break;

    case session && "DELETE":
      result = await deleteUserById(userId);
      res.json({ ...result, message: `user with userId: ${userId} deleted` });
      break;

    case "POST":
      const email = req.body.email;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const username = req.body.username;

      result = await createUser(email, hashedPassword, username);
      res.json({ ...result, message: `user with name: ${username} created` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
