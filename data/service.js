const mysql = require("mysql2/promise");
import mysqlConfig from "./db";

const getServices = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      "SELECT * FROM `serviceTable`"
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getServiceById = async (serviceId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM serviceTable WHERE serviceId = ${serviceId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const createService = async (title, description) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO serviceTable ( title, description) VALUES ("${title}", "${description}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateService = async (serviceId, updateTitle, updateDescription) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE serviceTable SET title = "${updateTitle}", description= "${updateDescription}" WHERE serviceId = ${serviceId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteServiceById = async (serviceId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `DELETE FROM serviceTable WHERE serviceId = ${serviceId}`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const services = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteServiceById,
};

module.exports = services;
