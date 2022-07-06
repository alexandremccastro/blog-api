const User = require("@core/database/models/user.model");

const authCheck = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [, token] = authorization.split(" ");

  const user = await User.findOne({ "tokens.token": token });

  if (!user) return res.status(401).send({ message: "Unauthorized." });

  Object.assign(req, { user, token });

  next();
};

module.exports = authCheck;
