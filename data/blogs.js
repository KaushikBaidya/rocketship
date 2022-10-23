const mysql = require("mysql2/promise");
import mysqlConfig from "./db";
const multer = require("multer");
// const moment = require("moment");

var imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./images");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

// img filter
const isImage = (req, file, callback) => {
  if (file.mimetype.startsWith("image")) {
    callback(null, true);
  } else {
    callback(null, Error("only image is allowd"));
  }
};

var upload = multer({
  storage: imgconfig,
  fileFilter: isImage,
});

const createBlog = async (title, description, filename) => {
  upload.single("photo");
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO blogTable ( title, description, img) VALUES ("${title}", "${description}", "${filename}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

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
      `SELECT * FROM blogTable WHERE blogId = ${blogId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateBlog = async (blogId, updateTitle, updateDescription) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE blogTable SET title = "${updateTitle}", description= "${updateDescription}" WHERE blogId = ${blogId}`
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
      `DELETE FROM blogTable WHERE blogId = ${blogId}`
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
  updateBlog,
  deleteBlogById,
};

module.exports = blogs;
