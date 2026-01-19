const mongoose = require("mongoose");

const facultySchema = new mongoose.Schema({

    name :{type : String,
        required: true
    },
    email :{type : String,
        required: true,
        unique : true
    },
    password :{type : Number,
        required : true
    },
    department: {type: String,
        required: true
    }
},{timestamps: true})

module.exports = new mongoose.model("Faculty",facultySchema)