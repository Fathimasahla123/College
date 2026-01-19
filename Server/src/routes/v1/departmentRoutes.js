const departmentRouter = require("express").Router()
const { createDepartment, listDepartment, departmentDetails, updateDepartment, deleteDepartment } = require("../../controllers/departmentController")
const authAdmin = require("../../middleware/authAdmin")
const upload = require("../../middleware/multer")


departmentRouter.post("/create", authAdmin, upload.single("image"),createDepartment)
departmentRouter.get("/listdepartment",listDepartment)
departmentRouter.get("/departmentdetails/:departmentId",departmentDetails)
departmentRouter.put("/update/:departmentId", authAdmin, upload.single("image"),updateDepartment)
departmentRouter.delete("/delete/:departmentId",authAdmin,deleteDepartment)



module.exports = departmentRouter