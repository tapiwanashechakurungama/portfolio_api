import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import UserRoutes from "./routes/userRoutes.js"



const app = express()
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
dotenv.config();


const port = process.env.PORT || 8080
app.use("/users", UserRoutes);

app.listen(port, ()=>{
  connectDB()
  console.log(`server running on port ${port}`)
})
app.get("/",(req,res)=>{
  res.json({
    loginUser:"/users/login",
    registerUser:"/users/register",
    getAllUSers:"/users/all",
    getUserById:"/users/:id"
  })
})


