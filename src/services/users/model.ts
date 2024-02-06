import { Schema, model } from "mongoose";
import { IUserModel } from "./interface";
import uniqueValidator from "mongoose-unique-validator";

export const UserSchema = new Schema<IUserModel>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  terms: {
    type: Boolean,
    required: true,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.plugin(uniqueValidator);

const User = model<IUserModel>("User", UserSchema);

export default User;
