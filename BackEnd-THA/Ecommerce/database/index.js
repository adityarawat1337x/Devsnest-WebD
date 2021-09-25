const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "devs", //db name
  "napster", //user name
  "asdw", //passsword
  {
    host: "localhost",
    dialect: "postgres",
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("DB CONNECTION ESTABLISHED");
  } catch (err) {
    console.error("DB CONNECTION FAILED");
  }
})();

module.exports = sequelize;
