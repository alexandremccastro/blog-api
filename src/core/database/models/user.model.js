const connection = require("@core/database/connection");
const UserSchema = require("@core/database/schemas/user.schema");

const UserModel = connection.model("users", UserSchema);

module.exports = UserModel;
