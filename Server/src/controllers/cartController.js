const Cart = require("../models/cartModel");
const Department = require("../models/departmentModel");

exports.addToCart = async(req,res)=>{
    try {
        const studentId = req.student
        const {departmentId } = req.params

        const department = await Department.findById(departmentId)

        if(!department){
            return res.status(404).json({error:"Department not found"})
        }

        let cart = await Cart.findOne({studentId})

        if(!cart){
            cart = new Cart({studentId, departments:[]})
        }

        const departmentAlreadyExist = cart.departments.some((item)=> item.departmentId.equals(departmentId))

        if(departmentAlreadyExist){
            return res.status(400).json({error: "Department already in cart"})
        }

        cart.departments.push({
            departmentId
        })
        await cart.save()
        res.status(200).json({message:"Department added to cart", cart})
    } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}