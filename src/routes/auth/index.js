const { Router } = require("express");
const User = require("@app/database/models/user");

const router = Router();

router.post("/login", async (req, res) => {
  const data = ({ name, email, password } = req.body);

  try {
    const user = new User(data);
    await user.save();
  } catch (e) {
    console.log("Deu errro", e);
  }

  return res.status(200).send({ message: "Login" });
});

router.post("/register", (req, res) => {
  console.log(req);
  return res.status(200).send({ message: "Register" });
});

router.get("/user", (req, res) => {
  console.log(req);
  return res.status(200).send({ message: "User" });
});

router.post("/logout", (req, res) => {
  console.log(req);
  return res.status(200).send({ message: "Logout" });
});

module.exports = router;
