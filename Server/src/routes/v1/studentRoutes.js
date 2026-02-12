const { studentRegister, studentLogin, studentLogout } = require("../../controllers/studentController");

const studentRouter = require("express").Router();




studentRouter.post("/register",studentRegister)
studentRouter.post("/login",studentLogin)
studentRouter.post("/logout",studentLogout)


module.exports = studentRouter;