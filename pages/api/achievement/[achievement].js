import {
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievementId,
} from "../../../data/achievement";

export default async function handler(req, res) {
  const achievementId = req.query.achievementId;
  const method = req.method;

  let result;
  switch (method) {
    case "GET":
      result = await getAchievementById(achievementId);
      res.json(result);
      break;

    case "DELETE":
      result = await deleteAchievementId(achievementId);
      res.json({
        ...result,
        message: `blog with testimonialId: ${achievementId} deleted`,
      });
      break;

    case "POST":
      const title = req.body.title;

      result = await createAchievement(title);
      res.json({ ...result, message: `user with userId: ${title} created` });
      break;

    case "PUT":
      const updateTitle = req.body.title;
      const updateDescription = req.body.description;

      result = await updateAchievement(
        testimonialId,
        updateTitle,
        updateDescription
      );
      res.json({
        ...result,
        message: `blog with title: ${achievementId} updated`,
      });
      break;

    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
