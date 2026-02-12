const adminRouter = require("./adminRoutes");
const cartRouter = require("./cartRoutes");
const departmentRouter = require("./departmentRoutes");
const studentRouter = require("./studentRoutes");

const v1Router = require("express").Router();

v1Router.use("/student",studentRouter)
v1Router.use("/admin",adminRouter)
v1Router.use("/department",departmentRouter)
v1Router.use("/cart",cartRouter)


module.exports = v1Router;