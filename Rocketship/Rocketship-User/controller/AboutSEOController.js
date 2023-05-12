const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getAboutSeo = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(`SELECT * FROM about_seo`);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateAboutSeo = async (
  updateTitle,
  updateDescription,
  updateKeywords,
  updatefacebook,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE about_seo SET title = ?, description= ?, keywords = ?, facebookApp = ?, image = ? WHERE seoId  = '1'",
      [
        updateTitle,
        updateDescription,
        updateKeywords,
        updatefacebook,
        updateImage,
      ]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getAboutSeo, updateAboutSeo };
