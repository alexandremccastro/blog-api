const { Schema } = require("mongoose");
const { String, Date, Array, Number } = require("mongoose/lib/schema/index");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
      expiresIn: {
        type: Number,
        required: true,
      },
    },
  ],
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = UserSchema;
