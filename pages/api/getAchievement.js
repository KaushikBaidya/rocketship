import { getAchievement } from "../../data/achievement";

export default async function handler(req, res) {
  const result = await getAchievement();
  res.json(result);
}
