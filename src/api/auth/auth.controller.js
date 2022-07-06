const AuthService = require("@api/auth/auth.service");

class AuthController {
  constructor() {
    this.authService = new AuthService();
  }

  async register(req, res) {
    const { body } = req;

    try {
      await this.authService.register(body);
      res.status(201).send({ message: "Successfully registered." });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async login(req, res) {
    const { body: credentials } = req;

    try {
      const sign = await this.authService.login(credentials);

      res.status(200).send({ sign });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }

  async user(req, res) {
    const { name, email } = req.user;
    res.status(200).send({ name, email });
  }

  async logout(req, res) {
    try {
      const { user, token } = req;
      await this.authService.logout(user, token);
      res.send({ message: "Successfully loggedout." });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = new AuthController();
