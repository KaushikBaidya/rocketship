const mysql = require("mysql2/promise");
import mysqlConfig from "./db";

const getBlogs = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `blogTable`"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM blogTable WHERE id=${blogId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createBlog = async (title, description) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO blogTable ( title, description) VALUES ("${title}", "${description}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      console.log("sporte")// `DELETE FROM blogTable WHERE blogId = ${blogId};`
      `DELETE FROM blogTable WHERE blogTable.blogId = ${blogId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const blogs = {
  getBlogs,
  getBlogById,
  createBlog,
  deleteBlogById,
};

module.exports = blogs;
