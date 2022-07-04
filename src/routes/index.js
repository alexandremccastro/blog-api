const auth = require("./auth");

module.exports = [
  {
    path: "/",
    handlers: auth,
  },
];
