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

const createService = async (title, description, img) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `INSERT INTO serviceTable ( title, description, img) VALUES ("${title}", "${description}", "${img}");`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateService = async (
  serviceId,
  updateTitle,
  updateDescription,
  updateImg
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows, fields] = await connection.execute(
      `UPDATE serviceTable SET title = "${updateTitle}", description= "${updateDescription}", img="${updateImg}"  WHERE serviceId = ${serviceId}`
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
