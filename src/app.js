require("module-alias/register");
require("dotenv").config();
const express = require("express");
const routes = require("@app/routes");

const PORT = process.env.APP_PORT || 3000;

const app = express();
app.use(express.json());

routes.map((route) => {
  app.use(route.path, route.handlers);
});

app.listen(PORT, () => {
  console.log("Running on port:", PORT);
});

module.exports = app;
