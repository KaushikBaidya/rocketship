const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getServiceHero = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(`SELECT * FROM service_hero`);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateServiceHero = async (
  updatedTitle,
  updatedSubtitle,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE service_hero SET title = ?, subtitle = ?, image = ? WHERE heroId = 1",
      [updatedTitle, updatedSubtitle, updateImage]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getServiceHero, updateServiceHero };

// const servicehero = {
//   getServiceHero,
//   updateServiceHero,
// };

// module.exports = servicehero;
