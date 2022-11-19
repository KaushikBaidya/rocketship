const mysql = require("mysql2/promise");
import mysqlConfig from "./db";

const getUsers = async () => {
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

const getUserById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM userTable WHERE userId=${userId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (user, hashedPassword) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO userTable ( user, password) VALUES ("${user}", "${hashedPassword}");`
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
      `DELETE FROM userTable WHERE userId = ${userId};`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const users = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};

module.exports = users;
