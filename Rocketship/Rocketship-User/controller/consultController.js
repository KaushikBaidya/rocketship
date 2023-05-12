const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getConsults = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT firstname, lastname, consultdate, consulttime, consultId FROM `consult` ORDER BY consultId DESC"
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getConsultById = async (consultId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT * FROM consult WHERE consultId = ?",
      [consultId]
    );
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const createConsult = async (
  firstname,
  lastname,
  email,
  phone,
  consultdate,
  consulttime,
  details
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "INSERT INTO consult ( firstname, lastname, email, phone, consultdate, consulttime, details) VALUES (?,?,?,?,?,?,?)",
      [firstname, lastname, email, phone, consultdate, consulttime, details]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteConsultById = async (consultId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "DELETE FROM consult WHERE consultId = ?",
      [consultId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export { getConsults, getConsultById, createConsult, deleteConsultById };
