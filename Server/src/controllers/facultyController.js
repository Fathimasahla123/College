const Faculty = require("../models/facultyModel");

exports.facultyLogin = async (req, res) => {
  try {
    const { name, email, password, confirmpassword, department } = req.body;

    if (!name || !email || !password || !confirmpassword || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "passwords not same" });
    }
    const facultyExist = await Faculty.findOne({ email });
    if (facultyExist) {
      return res.status(400).json({ message: "faculty already exist" });
    }

    const newFaculty = new Faculty({
      name,
      email,
      password,
      department
    });
    const faculty = await newFaculty.save();
    if (faculty) {
      res.status(200).json({ message: "new faculty created" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "error while faculty login" });
  }
};
