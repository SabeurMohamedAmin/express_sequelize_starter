// Initialize the database connection
// initiate the Sequelize Class from the sequelize package with capital S
const Sequelize = require("sequelize");
const path = require("path");

// console.log(path.resolve(__dirname, "config.env"));
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_name = process.env.DB_NAME || "database";
const db_dialect = process.env.DB_DIALECT || "mysql";
const db_path = path.resolve(__dirname, "..", "database", `${db_name}.sqlite`);

/*****
 *
 * @Create_a_new_instance of Sequelize with the database configuration
 * The Sequelize constructor takes three parameters:
 * database name, database user, and database password
 * The fourth parameter is an object that contains the database configuration
 *
 ******/
const sequelize = new Sequelize(db_name, db_user, db_password, {
  //dialect or driver can be: sqlite, mysql, postgres, mariadb, mssql
  dialect: db_dialect,
  //storage is only used by sqlite database, other use host, port.
  storage: db_path,
});

// Test the connection to the database
// const dbConnect = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };
// dbConnect();

module.exports = sequelize;
