const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getServiceSeo = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(`SELECT * FROM service_seo`);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const updateServiceSeo = async (
  updateTitle,
  updateDescription,
  updateKeywords,
  updatefacebook,
  updateImage
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE service_seo SET title = ?, description= ?, keywords = ?, facebookApp = ?, image = ? WHERE seoId  = 1",
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

export { getServiceSeo, updateServiceSeo };

// const serviceseo = {
//   getServiceSeo,
//   updateServiceSeo,
// };

// module.exports = serviceseo;
