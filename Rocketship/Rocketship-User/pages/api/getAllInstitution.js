import { getInstitution } from "../../controller/institutionController";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const result = await getInstitution();
    res.json(result);
  } else {
    res.json({ message: "You have to log in" });
  }
}
export default handler;
