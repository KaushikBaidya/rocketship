const mysql = require('mysql2/promise')
import mysqlConfig from './db'

const getTestimonials = async () => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      'SELECT * FROM `testimonialTable`',
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const getTestimonialById = async (testimonialId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows] = await connection.execute(
      `SELECT * FROM testimonialTable WHERE testimonialId = ${testimonialId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const createTestimonial = async (title, description, img) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `INSERT INTO testimonialTable ( title, description, img) VALUES ("${title}", "${description}", "${img}");`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const updateTestimonial = async (
  testimonialId,
  updateTitle,
  updateDescription,
  updateImg,
) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `UPDATE testimonialTable SET title = "${updateTitle}", description= "${updateDescription}", img="${updateImg}" WHERE testimonialId = ${testimonialId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const deleteTestimonialId = async (testimonialId) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows, fields] = await connection.execute(
      `DELETE FROM testimonialTable WHERE testimonialId = ${testimonialId}`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

const testimonials = {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonialId,
}

module.exports = testimonials
