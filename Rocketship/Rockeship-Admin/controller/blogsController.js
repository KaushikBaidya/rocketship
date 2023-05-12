const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const createBlog = async (
  title,
  description,
  permalink,
  keywords,
  seoDescription,
  img
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "INSERT INTO blog ( title, description, permalink, keywords, seoDescription, img, date, isPublished) VALUES (?,?,?,?,?,?, CURDATE(), 0)",
      [title, description, permalink, keywords, seoDescription, img]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateBlog = async (
  blogId,
  updateTitle,
  updateDescription,
  updatePermalink,
  updateKeywords,
  updateSeoDescription,
  updateImg
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE blog SET title = ? , description= ?, permalink = ?, keywords = ? , seoDescription = ?, img= ? WHERE blogId = ?",
      [
        updateTitle,
        updateDescription,
        updatePermalink,
        updateKeywords,
        updateSeoDescription,
        updateImg,
        blogId,
      ]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getBlogs = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT title, blogId, isPublished FROM `blog`"
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT * FROM blog WHERE blogId = ?",
      [blogId]
    );
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const getBlogPermalink = async (permalink) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT * FROM blog WHERE permalink = ?",
      [permalink]
    );
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const getBlogsPublished = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      `SELECT blogId, title, permalink, img FROM blog WHERE isPublished = '1'`
    );
    // connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const publishBlog = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE blog SET isPublished = '1' WHERE blogId = ?",
      [blogId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};
const unpublishBlog = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      `UPDATE blog SET isPublished = '0' WHERE blogId =?`,
      [blogId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("DELETE FROM blog WHERE blogId = ?", [
      blogId,
    ]);
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export {
  getBlogs,
  getBlogById,
  getBlogPermalink,
  createBlog,
  updateBlog,
  publishBlog,
  unpublishBlog,
  getBlogsPublished,
  deleteBlogById,
};

// const blogs = {
//   getBlogs,
//   getBlogById,
//   getBlogPermalink,
//   createBlog,
//   updateBlog,
//   publishBlog,
//   unpublishBlog,
//   getBlogsPublished,
//   deleteBlogById,
// };

// module.exports = blogs;
