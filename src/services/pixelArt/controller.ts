import { RequestHandler } from "express";
import PixelArt from "./model";
import { IPixelArt } from "./interface";

//find pixel art

//creat pixel art.
export const createPixelArt: RequestHandler = async (req, res, next) => {
  const data: IPixelArt = {
    owner: "",
    name: req.body.name,
    file: req.body.file,
    comments: [],
    favorites: [],
  };

  try {
    const pixelArt = await PixelArt.create(data);
    if (!pixelArt) throw new Error("Error al creaar Pixel Art");
    res.status(200).json(pixelArt);
  } catch (e) {
    console.log(e);
    res.status(501).json({ error: e instanceof Error ? e.message : "" });
  }
};
