const { createToken } = require("../../utilities/generateToken");
const {hashPassword,comparePassword} = require("../../utilities/passwordUtilities");
const Student = require("../models/studentModel");

exports.studentRegister = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (!name || !email || !password || !confirmpassword) {
      return res.status(400).json({ error: "all fields are required" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "passwords not same" });
    }

    const studentExist = await Student.findOne({ email });
    if (studentExist) {
      return res.status(400).json({ error: "student already exist" });
    }

    const hashedPassword = await hashPassword(password)

    const newStudent = new Student({
      name,
      email,
      password: hashedPassword
    });
    const saved = await newStudent.save();
    if (saved) {
      const token = createToken(saved._id)
      res.cookie("token",token)
      return res.status(200).json({ message: "new student created" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
};

exports.studentLogin = async(req, res)=>{
  try {
    const {email, password} = req.body;

    if (!email || !password ) {
      return res.status(400).json({ error: "all fields are required" });
    }

    const studentExist = await Student.findOne({ email });
    if (!studentExist) {
      return res.status(400).json({ error: "student not found" });
    }

    const passwordMatch = await comparePassword(password, studentExist.password)
    
    if(!passwordMatch){
      return res.status(400).json({error: "password does not match"})
    }
    const token = createToken(studentExist._id)
      res.cookie("token",token)
    return res.status(200).json({message: "student login success",studentExist})
    
 } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}


exports.studentLogout = (req, res)=>{
  try {
    res.clearCookie("token")
    res.status(200).json({message:"Logged Out"})
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}
