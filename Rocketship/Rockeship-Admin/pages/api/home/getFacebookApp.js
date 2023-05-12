import { getFacebook } from "../../../controller/HomeSEOController";

export default async function handler(req, res) {
  const result = await getFacebook();
  res.json(result);
}
