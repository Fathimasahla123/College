const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  departments: [
    {
      departmentId: {
        type: mongoose.Types.ObjectId,
        ref: "Department",
        required: true,
      },
      
    },
  ],
});

module.exports = new mongoose.model("Cart", cartSchema)