const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getAllUsers = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `user`");
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getUser = async (email) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM user WHERE email= ?", [
      email,
    ]);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};
// console.log(getUser(email));
const getUserById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM user WHERE id= ?", [
      userId,
    ]);
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const createUser = async (email, hashedPassword, username) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "INSERT INTO user (  email, password, username,role) VALUES (?,?,?,'user')",
      [email, hashedPassword, username]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteUserById = async (userId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("DELETE FROM user WHERE id = ?", [
      userId,
    ]);
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getAllUsers, getUser, getUserById, createUser, deleteUserById };
