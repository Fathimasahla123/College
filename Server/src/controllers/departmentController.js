const uploadToCloudinary = require("../../utilities/imageUpload");
const Department= require("../models/departmentModel");

exports.createDepartment = async(req,res)=>{
    try {
        const{name, description, subjects} = req.body;
        if(!name|| !description|| !subjects){
            return res.status(400).json({error:"all fields are required"})
        }
        if(!req.file){
            return res.status(400).json({error:"image not found"})
        }

        const cloudinaryRes = await uploadToCloudinary(req.file.path)
        console.log(cloudinaryRes, "image uploaded by cloudinary");

        const newDepartment = new Department({
            name, description, subjects, image: cloudinaryRes
        })

        let savedDepartment = await newDepartment.save()
        if(savedDepartment){
            return res.status(200).json({message:"Department added",savedDepartment})
        }

    } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
  }
}

exports.listDepartment = async(req,res)=>{
    try {
        const departmentList = await Department.find()
        res.status(200).json(departmentList)
    } catch (error) {
         console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
        
    }
}

exports.departmentDetails = async (req,res)=>{
    try {
        const {departmentId} = req.params;
        const departmentDetails = await Department.findById({_id: departmentId}) 
        if(!departmentDetails){
            return res.status(400).json({error: "department not found"})
            }  
            return res.status(200).json(departmentDetails)     

    } catch (error) {
         console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
        
    }
}

exports.updateDepartment = async (req,res)=>{
    try {
        const {departmentId} = req.params;
        const{name, description, subjects} = req.body;
        let imageUrl;

        let isDepartmentExist = await Department.findById(departmentId)
        if(!isDepartmentExist){
            return res.status(400).json({error:"department not exist"})
        }
        if(req.file){
             const cloudinaryRes = await uploadToCloudinary(req.file.path)
             imageUrl = cloudinaryRes
        }

        const updatedDepartment = await Department.findByIdAndUpdate(departmentId,{name, description, subjects,image: imageUrl}, {new:true})
        return res.status(200).json({message:"department updated",updatedDepartment})
        
  } catch (error) {
         console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
        
    }
}

exports.deleteDepartment = async(req,res)=>{
    try {
        const {departmentId} = req.params;
         const deleteDepartment = await Department.findByIdAndDelete(departmentId)
         if(!deleteDepartment){
            return res.status(400).json({error:"Department not found"})
         }
         return res.status(200).json({message:"Department deleted"})
        
   } catch (error) {
         console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "internal server error" });
        
    }
}