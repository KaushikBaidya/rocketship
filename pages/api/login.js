import mysqlConfig from "../../data/db";
import jwt from "jsonwebtoken";

const mysql = require("mysql2/promise");

const bcrypt = require("bcrypt");

const getUser = async (user) => {
  try {
    const connection = await mysql.createConnection(mysqlConfig);
    const [rows] = await connection.execute(
      `SELECT * FROM userdb.usertable where user = '${user}'`
    );
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export default async function handler(req, res) {
  const method = req.method;
  if (method === "POST") {
    let result;

    const user = req.body.username;
    const password = req.body.password;

    result = await getUser(user);

    const hashedPassword = result[0].password;
    if (await bcrypt.compare(password, hashedPassword)) {
      var token = jwt.sign({ user, password }, "jwtSecret", {
        expiresIn: "2d",
      });
      res.status(200).json({ success: true, token, message: "success login" });
      console.log({ token });
    } else {
      res.json({ message: "not success login" });
    }
  }
  //  else if (method === "GET") {
  //   if (req.session.user) {
  //     res.send({ loggedIn: true, user: req.session.user });
  //   } else {
  //     res.send({ loggedIn: false });
  //   }
  // }
  else {
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
