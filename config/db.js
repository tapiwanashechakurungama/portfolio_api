import dotenv from "dotenv";
import mongoose from "mongoose"
dotenv.config();

const mongo_uri = process.env.MONGO_URI;
const connectDB = async()=>{
  try {
    await mongoose.connect(mongo_uri);
    console.log("connected to mongodb")
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectDB