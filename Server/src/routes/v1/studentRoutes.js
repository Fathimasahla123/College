const { studentRegister, studentLogin, studentLogout, listStudents } = require("../../controllers/studentController");

const studentRouter = require("express").Router();




studentRouter.post("/register",studentRegister)
studentRouter.post("/login",studentLogin)
studentRouter.post("/logout",studentLogout)
studentRouter.get("/liststudents",listStudents)


module.exports = studentRouter;