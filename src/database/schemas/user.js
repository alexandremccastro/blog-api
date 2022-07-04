const { Schema } = require("mongoose");
const { String, Date, Array } = require("mongoose/lib/schema/index");

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  tokens: Array,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = userSchema;
