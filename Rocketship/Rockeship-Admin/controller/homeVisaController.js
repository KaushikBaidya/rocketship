const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getVisa = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `home_visa`");
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateVisa = async (
  updatedTitle,
  updatedSubtitle,
  updatedSubtitle2,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE home_visa SET title = ? , subtitle = ? ,subtitle2 = ?, image = ? WHERE visaId = 1",
      [updatedTitle, updatedSubtitle, updatedSubtitle2, updateImage]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getVisa, updateVisa };
