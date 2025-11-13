 import mongoose from "mongoose"
 const MONGODB_URL = process.env.MONGODB_SECRET_KEY;
 const connectToDB = async() => {
  mongoose.connect(MONGODB_URL)
  .then(()=>console.log("Database connected successfully"))
  .catch((error) => console.log(error))
 }
 export default connectToDB