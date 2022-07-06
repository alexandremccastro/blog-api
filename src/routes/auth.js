const { Router } = require("express");
const AuthController = require("@api/auth/auth.controller");
const authCheck = require("@core/middleware/auth-check.middleware");

const router = Router();

router.post("/register", (req, res) => AuthController.register(req, res));
router.post("/login", (req, res) => AuthController.login(req, res));
router.get("/user", authCheck, (req, res) => AuthController.user(req, res));
router.post("/logout", authCheck, (req, res) =>
  AuthController.logout(req, res)
);

module.exports = router;
