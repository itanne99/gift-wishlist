// db.js
import postgres from 'postgres'

const sql = postgres({ 
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
  username: process.env.DBUSERNAME,
  password: process.env.DBPASSWORD
 }) // will use psql environment variables

export default sql