const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getHomeSeo = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `home_seo`");
    connection.end(console.log("connection ended seo"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const getFacebook = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT facebookApp FROM `home_seo`");
    connection.end(console.log("connection ended seo"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const getGoogle = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT googleId FROM `home_seo`");
    connection.end(console.log("connection ended seo"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateHomeSeo = async (
  updateTitle,
  updateDescription,
  updateKeywords,
  updateFacebook,
  updateGoogle,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE home_seo SET title = ?, description = ?, keywords = ?, facebookApp = ?, googleId = ?, image = ? WHERE seoId  = '1'",
      [
        updateTitle,
        updateDescription,
        updateKeywords,
        updateFacebook,
        updateGoogle,
        updateImage,
      ]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getHomeSeo, updateHomeSeo, getFacebook, getGoogle };
