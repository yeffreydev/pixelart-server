import { Router } from "express";
import authRoutes from "../services/auth/routes";

const routes = Router();

routes.use("/auth", authRoutes);

export default routes;
