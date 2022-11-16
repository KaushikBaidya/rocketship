import mysqlConfig from '../../data/db'
import jwt from 'jsonwebtoken'

const mysql = require('mysql2/promise')

const bcrypt = require('bcrypt')

const getUser = async (user) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig)
    const [rows] = await connection.execute(
      `SELECT * FROM userTable where userName = '${user}'`,
    )
    return rows
  } catch (e) {
    console.error(e)
  }
}

export default async function handler(req, res) {
  const method = req.method
  if (method === 'POST') {
    let result

    const user = req.body.username
    const password = req.body.password

    result = await getUser(user)
    console.log(result)
    const hashedPassword = result[0].password
    if (await bcrypt.compare(password, hashedPassword)) {
      var token = jwt.sign(
        { success: true, user, fullName: result[0].fullName, role: 'admin' },
        'jwtSecret',
        {
          expiresIn: '2d',
        },
      )
      res.status(200).json({ token })
      // console.log({ token, fullName })
    } else {
      res.json({ message: 'not success login' })
    }
  } else {
    return res.status(405).end(`Method ${method} Not Allowed`)
  }
}
