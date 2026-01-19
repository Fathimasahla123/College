const mongoose = require("mongoose")

const departmentSchema = new mongoose.Schema({
    name:{type : String, required: true, unique:true},
    description:{type : String, required: true},
    subjects: {type: String, required:true},
    image: {type: String, required:true},


},{timestamps: true})

module.exports = new mongoose.model("Department",departmentSchema)