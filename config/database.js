const { createPool } = require("mysql");
const pool = createPool({
  // port:process.env.DB_PORT,
  // host:process.env.DB_HOST,
  // user:process.env.DB_USER,
  // password:process.env.DB_PASSWORD,
  // database:process.env.MYSQL_DB,
  // waitForConnections: true,
  // connectionLimit:10,
  // queueLimit:0

  host: "localhost", // Your server provider's IP address
  user: "root", // Your database username
  password: "", // Your database password
  database: "fixiteducation", // Your database name
  port: 3306, // MySQL default port
  connectionLimit: 10,
});

module.exports = pool;
