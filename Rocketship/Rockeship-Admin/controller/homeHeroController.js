const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getHomeHero = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `home_hero`");
    connection.end(console.log("connection ended hero"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateHomeHero = async (updatedTitle, updatedSubtitle, updateImage) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE home_hero SET title = ?, subtitle = ?, image = ? WHERE heroId = 1",
      [updatedTitle, updatedSubtitle, updateImage]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getHomeHero, updateHomeHero };
