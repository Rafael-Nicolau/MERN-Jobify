import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    unique: true,
    minlength: 6,
  },
  lastName: {
    type: String,
    minlength: 3,
    maxlength: 20,
    trim: true,
    default: "Your Last Name",
  },
  location: {
    type: String,
    trim: true,
    default: "Your City",
  },
});

export default mongoose.model("User", UserSchema);
