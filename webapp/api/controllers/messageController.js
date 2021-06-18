const mariadb = require('mariadb')
const helpMethods = require('../helpMethods/helpMethods')

const pool = mariadb.createPool({
  host: process.env.URL,
  user: 'mariadb',
  password: 'password123', 
  database: 'app',
  connectionLimit: 5
})

const messageController = {}

messageController.get = async (req, res, next) => {
  let conn; 
  try {
    conn = await pool.getConnection()
    const rows = await conn.query('SELECT * from Content')
    const random = helpMethods.getRandomString(rows)
    if (conn) { 
      conn.end()
    }
    res.status(200).send({ express: random })
  } catch (err) {
    if (err) {
      next(err)
    }
  }
}

module.exports = messageController
