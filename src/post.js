const mysql = require("mysql2/promise");
import mysqlConfig from "./db";

const getPosts = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `userTable`"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getPostById = async (postId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM userTable WHERE id=${userId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (name, hashedPassword) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO userTable ( user, password) VALUES ("${name}", "${hashedPassword}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteUserById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM userTable WHERE id = ${userId};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const users = {
  getUsers: getPosts,
  getUserById: getpostById,
  createUser,
  deleteUserById,
};

module.exports = users;
