import mongoose from "mongoose";
let Schema = mongoose.Schema;

interface IUser {
  address: string;
  username: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
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

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
