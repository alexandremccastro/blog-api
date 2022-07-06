const UserService = require("@api/users/user.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
  constructor() {
    this.userService = new UserService();
  }

  async register(user) {
    return await this.userService.createOne(user);
  }

  async login(credentials) {
    const { email, password } = credentials;
    const user = await this.userService.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const { _id, name, email } = user;
      const token = jwt.sign({ _id }, process.env.JWT_SECRET);

      user.tokens.push({ token, expiresIn: Date.now() });
      user.save();

      return {
        name,
        email,
        token,
      };
    } else {
      throw new Error("Invalid credentials.");
    }
  }

  async logout(user, token) {
    user.tokens = user.tokens.filter((item) => item.token != token);
    user.save();
  }
}

module.exports = AuthService;
