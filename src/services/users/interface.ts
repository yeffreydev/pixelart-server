import { Model } from "mongoose";

export interface IUser {
  _id?: string;
  email: string;
  username: string;
  password: string;
  role?: "user" | "authenticated";
}

export interface IUserModel extends IUser, Model<IUser> {
  //custom or
  //static methods
}
