const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getInstitution = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `institution`");
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getInstitutionById = async (institutionId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT * FROM institution WHERE institutionId = ?",
      [institutionId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createInstitution = async (name, image) => {
  try {
    console.log(name);
    console.log(image);
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "INSERT INTO institution ( name, image) VALUES (?,?)",
      [name, image]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateInstitution = async (institutionId, updateName, updateImage) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE institution SET title = ?, img= ? WHERE institutionId = ?",
      [updateName, updateImage, institutionId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteInstitutionId = async (institutionId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "DELETE FROM institution WHERE institutionId = ?",
      [institutionId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export {
  getInstitution,
  getInstitutionById,
  createInstitution,
  updateInstitution,
  deleteInstitutionId,
};
