import mongoose, { Schema } from "mongoose";

const lodgingSchema = new Schema({
  roomId: String,
  roomName: String,
  nights: Number,
  checkIn: String,
  checkOut: String,
  guests: Number,
  totalPrice: Number,
  createdAt: String,
  userId: String,
  userName:String,
  userEmail:String,
  status:String,
  bookingRef:String,
});

const Lodging =  mongoose.models.Lodging || mongoose.model("Lodging", lodgingSchema);
export default Lodging;
