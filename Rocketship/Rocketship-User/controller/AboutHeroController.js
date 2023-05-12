import mysqlConfig from "../database/db";
const mysql = require("mysql2/promise");

const getAboutHero = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM about_hero");
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateAboutHero = async (updatedTitle, updatedSubtitle, updateImage) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE about_hero SET title = ?, subtitle = ?, image = ? WHERE heroId = 1",
      [updatedTitle, updatedSubtitle, updateImage]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getAboutHero, updateAboutHero };
