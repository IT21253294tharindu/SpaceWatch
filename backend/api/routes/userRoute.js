import Authcontroller from "../controllers/Authcontroller";
import Router from "express";
const router = Router();

router.post("/register", Authcontroller.register);
router.post("/login", Authcontroller.login);

module.exports = router;