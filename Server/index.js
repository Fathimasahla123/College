require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const apiRouter = require("./src/routes")
const cookieparser = require("cookie-parser")


const app = express()

app.get("/",(req,res) =>{
    res.send("hello from backend");
})
app.use(express.json())
app.use(cookieparser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

mongoose.connect(process.env.MONGO_URL).then((res)=>{
    console.log("mongodb connected")
}).catch((error)=>{
    console.log("error", error)
})

app.use("/api", apiRouter)
app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`);
})

