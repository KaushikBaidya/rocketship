const mysql = require("mysql2/promise");

const mysqlConfig = {
  host: "localhost",
  port: 3306,
  user: "newuser",
  database: "userdb",
};
/**
 *
 * TODO: IMPLEMENT FUNCTIONALITY TO CLOSE MYSQL CONNECTIONS IN ALL FUNCTIONS
 */
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
      `SELECT * FROM userTable WHERE id=${userId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (name, password) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO userTable ( user, password) VALUES ("${name}", "${password}");`
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
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};

module.exports = users;
