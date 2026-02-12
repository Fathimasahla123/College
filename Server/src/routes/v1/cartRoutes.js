const { addToCart } = require("../../controllers/cartController")
const authStudent = require("../../middleware/authStudent")

const cartRouter = require ("express").Router()

cartRouter.post("/addtocart/:departmentId", authStudent, addToCart)

module.exports = cartRouter