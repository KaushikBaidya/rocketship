const mysql = require('mysql2/promise')
import mysqlConfig from './db'

const createBlog = async (title, description, img) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `INSERT INTO blogTable ( title, description, img, date) VALUES ('${title}', '${description}', '${img}', CURDATE());`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const getBlogs = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute('SELECT * FROM `blogTable`')
    return rows
  } catch (e) {
    console.error(e)
  }
}

const getBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows] = await connection.execute(
      `SELECT * FROM blogTable WHERE blogId = ${blogId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const updateBlog = async (
  blogId,
  updateTitle,
  updateDescription,
  updateImg,
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `UPDATE blogTable SET title = "${updateTitle}", description= "${updateDescription}", img="${updateImg}" WHERE blogId = ${blogId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const deleteBlogById = async (blogId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `DELETE FROM blogTable WHERE blogId = ${blogId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const blogs = {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlogById,
}

module.exports = blogs
