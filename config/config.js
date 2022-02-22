require("dotenv").config({ silent: "production" });
const { DB_HOST_PRODUCTION, DB_USERNAME_PRODUCTION, DB_PASSWORD_PRODUCTION, DB_DATABASE_PRODUCTION } = process.env;

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    operatorsAliases: 1,
    timezone: "+07:00"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: DB_USERNAME_PRODUCTION,
    host: DB_HOST_PRODUCTION,
    database: DB_DATABASE_PRODUCTION,
    password: DB_PASSWORD_PRODUCTION,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
