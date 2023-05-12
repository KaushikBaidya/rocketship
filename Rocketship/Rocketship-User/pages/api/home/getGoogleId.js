import { getGoogle } from "../../../controller/HomeSEOController";

export default async function handler(req, res) {
  const result = await getGoogle();
  res.json(result);
}
