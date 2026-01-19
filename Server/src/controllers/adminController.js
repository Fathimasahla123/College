const { createToken } = require("../../utilities/generateToken");
const { hashPassword, comparePassword } = require("../../utilities/passwordUtilities");
const Admin = require("../models/adminModel");

exports.adminRegister = async(req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email|| !password){
            return res.status(400).json({error:"All filds are required"})
        }
        const adminExist = await Admin.findOne({email})
        if(adminExist){
            return res.status(400).json({error: "email already exist"})
        }
        const hashedPassword = await hashPassword(password)

        const newAdmin = new Admin({
            email,
            password:hashedPassword
        })
        const saved = await newAdmin.save()
        if(saved){
            return res.status(200).json({message:"Admin creation successfull",saved})
        }
        
    } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}


exports.adminLogin = async(req, res)=>{
  try {
    const {email, password} = req.body;

    if (!email || !password ) {
      return res.status(400).json({ error: "all fields are required" });
    }

    const adminExist = await Admin.findOne({ email });
    if (!adminExist) {
      return res.status(400).json({ error: "admin not found" });
    }

    const passwordMatch = await comparePassword(password, adminExist.password)
    
    if(!passwordMatch){
      return res.status(400).json({error: "password does not match"})
    }
    const token = createToken(adminExist._id,"admin")
      res.cookie("Admin_token",token)
    return res.status(200).json({message: "admin login success",adminExist})
    
 } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}

exports.adminLogout = async(req,res)=>{
  try {
    res.clearCookie("Admin_token")
    res.status(200).json({message:"logout successful"})
    
 } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}