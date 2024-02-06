import { Schema, model } from "mongoose";
import { IPixelArtModel } from "./interface";
import uniqueValidator from "mongoose-unique-validator";

export const PixelArtSchema = new Schema<IPixelArtModel>({
  name: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
  comments: {
    type: [String],
  },
  favorites: {
    type: [String],
  },
});

PixelArtSchema.plugin(uniqueValidator);

const PixelArt = model<IPixelArtModel>("PixelArt", PixelArtSchema);

export default PixelArt;
