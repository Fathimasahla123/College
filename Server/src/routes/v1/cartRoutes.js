const { addToCart, getCart, removeFromCart } = require("../../controllers/cartController")
const authStudent = require("../../middleware/authStudent")

const cartRouter = require ("express").Router()

cartRouter.post("/addtocart/:departmentId", authStudent, addToCart)
cartRouter.get("/getcart", authStudent, getCart)
cartRouter.delete("/removefromcart/:departmentId", authStudent, removeFromCart)


module.exports = cartRouter