const { adminRegister, adminLogin, adminLogout, adminDashboard, } = require("../../controllers/adminController")
const authAdmin = require("../../middleware/authAdmin")
const adminRouter = require("express").Router()

adminRouter.post("/register",adminRegister)
adminRouter.post("/login",adminLogin)
adminRouter.post("/logout",adminLogout)
adminRouter.get("/dashboard", authAdmin, adminDashboard);

module.exports = adminRouter