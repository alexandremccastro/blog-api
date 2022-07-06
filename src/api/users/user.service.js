const User = require("@core/database/models/user.model");

const bcrypt = require("bcrypt");

class UserService {
  async createOne({ name, email, password }) {
    password = await bcrypt.hash(password, 10);
    return await User.create({ name, email, password });
  }

  async findOne(filter) {
    return await User.findOne(filter);
  }

  async update(filter, update) {
    return await User.updateOne(filter, update);
  }

  async deleteOne(filter) {
    return await User.deleteOne(filter);
  }
}

module.exports = UserService;
