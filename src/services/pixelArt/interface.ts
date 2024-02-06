import { Model } from "mongoose";

export interface IPixelArt {
  owner: string; //user id
  _id?: string;
  favorites: string[]; //users id.
  name: string;
  file: string;
  comments: string[]; //comments id.
}

export interface IPixelArtModel extends IPixelArt, Model<IPixelArt> {
  //custom methods or
  //static methods
}
