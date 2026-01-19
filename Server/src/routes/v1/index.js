const adminRouter = require("./adminRoutes");
const departmentRouter = require("./departmentRoutes");
const studentRouter = require("./studentRoutes");

const v1Router = require("express").Router();

v1Router.use("/student",studentRouter)
v1Router.use("/admin",adminRouter)
v1Router.use("/department",departmentRouter)


module.exports = v1Router;