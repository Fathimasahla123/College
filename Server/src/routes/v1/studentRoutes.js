const { studentRegister, studentLogin } = require("../../controllers/studentController");

const studentRouter = require("express").Router();




studentRouter.post("/register",studentRegister)
studentRouter.post("/login",studentLogin)



module.exports = studentRouter;