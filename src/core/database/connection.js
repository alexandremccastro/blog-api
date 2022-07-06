const { createConnection } = require("mongoose");

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_NAME: database,
  DB_USER: user,
  DB_PASS: pass,
} = process.env;

const DB_URI = `mongodb://${host}:${port}/${database}`;

class Database {
  connect() {
    return createConnection(DB_URI, {
      user,
      pass,
    });
  }
}

const db = new Database();

module.exports = db.connect();
