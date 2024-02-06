import { RequestHandler } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import config from "../../config/config";
import "./passport";
import { IUser } from "../users/interface";

//login controller
export const login: RequestHandler = async (req, res, next) => {
  passport.authenticate("login", async (err: Error, user: IUser, info: Object) => {
    try {
      if (err || !user) {
        return res.status(501).json(info);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET!);
        return res.status(200).json({ token, auth: true });
      });
    } catch (error: any) {
      return res.status(501).json({ message: "server error ocurred" });
    }
  })(req, res, next);
};

//signup controller
export const signup: RequestHandler = async (req, res, next) => {
  passport.authenticate("signup", async (err: Error, user: IUser, info: Object) => {
    try {
      if (err || !user) {
        return res.status(501).json(info);
      }
      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);
        const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET!);
        return res.status(200).json({ token, auth: true });
      });
    } catch (error) {
      return res.status(501).json({ message: "server error ocurred" });
    }
  })(req, res, next);
};
