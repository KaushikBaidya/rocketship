const mysql = require("mysql2/promise");
import mysqlConfig from "../database/db";

const getTestimonials = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query("SELECT * FROM `testimonial`");
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const getTestimonialById = async (testimonialId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "SELECT * FROM testimonial WHERE testimonialId = ?",
      [testimonialId]
    );
    connection.end(console.log("connection ended"));
    return rows[0];
  } catch (e) {
    console.error(e);
  }
};

const createTestimonial = async (title, description, designation, img) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "INSERT INTO testimonial ( title, description, designation, img) VALUES (?,?,?,?)",
      [title, description, designation, img]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const updateTestimonial = async (
  testimonialId,
  updateTitle,
  updateDescription,
  updateDesignation,
  updateImg
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "UPDATE testimonial SET title = ?, description= ?, designation = ?, img=? WHERE testimonialId = ?",
      [
        updateTitle,
        updateDescription,
        updateDesignation,
        updateImg,
        testimonialId,
      ]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

const deleteTestimonialId = async (testimonialId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.query(
      "DELETE FROM testimonial WHERE testimonialId = ? ",
      [testimonialId]
    );
    connection.end(console.log("connection ended"));
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonialId,
};

// const testimonials = {
//   getTestimonials,
//   getTestimonialById,
//   createTestimonial,
//   updateTestimonial,
//   deleteTestimonialId,
// };

// module.exports = testimonials;
