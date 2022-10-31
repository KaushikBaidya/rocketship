const mysql = require("mysql2/promise");
import mysqlConfig from "./db";

const getAchievement = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `achievementTable`"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getAchievementById = async (achievementId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM achievementTable WHERE achievementId = ${achievementId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createAchievement = async (title) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO achievementTable ( title) VALUES ("${title}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateAchievement = async (
  achievementId,
  updateTitle,
  updateDescription
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE achievementTable SET title = "${updateTitle}", description= "${updateDescription}" WHERE achievementId = ${achievementId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteAchievementId = async (achievementId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM achievementTable WHERE achievementId = ${achievementId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const achievement = {
  getAchievement,
  getAchievementById,
  createAchievement,
  updateAchievement,
  deleteAchievementId,
};

module.exports = achievement;
