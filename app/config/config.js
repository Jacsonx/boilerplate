/**
 * Config about your DATABASE
 */

const knex = require('knex')({
  client: "pg",
  connection: {
    user: "postgres",
    host: "127.0.0.1",
    port: "5432",
    database: "dashboard",
    password: "admin",
  },
  pool: {
    min: 0,
    max: 1,
  },
});

module.exports = {
  knex,
};