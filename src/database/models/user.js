const connection = require("@app/database/connection");
const UserSchema = require("@app/database/schemas/user");

module.exports = connection.model("users", UserSchema);
