import mongoose from "mongoose";
let Schema = mongoose.Schema;

const UserSchema = new Schema({
  address: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
