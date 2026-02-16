const Cart = require("../models/cartModel");
const Department = require("../models/departmentModel");

exports.getCart = async (req, res) => {
  try {
    const studentId = req.student;
    const cart = await Cart.findOne({ studentId }).populate(
      "departments.departmentId",
    );

    console.log(cart);
    if (!cart) {
      return res.status(400).json({ error: "Cart is empty" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const studentId = req.student;
    const { departmentId } = req.params;

    const department = await Department.findById(departmentId);

    if (!department) {
      return res.status(404).json({ error: "Department not found" });
    }

    let cart = await Cart.findOne({ studentId });

    if (!cart) {
      cart = new Cart({ studentId, departments: [] });
    }

    const departmentAlreadyExist = cart.departments.some((item) =>
      item.departmentId.equals(departmentId),
    );

    if (departmentAlreadyExist) {
      return res.status(400).json({ error: "Department already in cart" });
    }

    cart.departments.push({
      departmentId,
    });
    await cart.save();
    res.status(200).json({ message: "Department added to cart", cart });
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
};

exports.removeFromCart = async (req,res) => {
  try {
    const studentId = req.student;
    const { departmentId } = req.params;

    let cart = await Cart.findOne({ studentId });
    if (!cart) {
      return res.status(404).json({ error: "cart not found" });
    }
    cart.departments = cart.departments.filter((item) =>
      !item.departmentId.equals(departmentId),
    );

    await cart.save();
    res.status(200).json({ message: "Department removed from cart", cart });
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
};
