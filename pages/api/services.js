import { getServices } from "../../data/service";

export default async function handler(req, res) {
  const result = await getServices();
  res.json(result);
}
