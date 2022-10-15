const bcrypt = require("bcrypt");

import { getUserById, deleteUserById, createUser } from "../../../data/user";

export default async function handler(req, res) {
  const userId = req.query.userId;

  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getUserById(userId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteUserById(userId);
      res.json({ ...result, message: `user with userId: ${userId} deleted` });
      break;

    case "POST":
      const name = req.body.name;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      result = await createUser(name, hashedPassword);
      res.json({ ...result, message: `user with userId: ${name} created` });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
