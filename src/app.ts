import express from "express";
import cors from "cors";
import morgan from "morgan";

//db connection
import "./config/bd";
import routes from "./router";

//express app.
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

//routes
app.use("/api", routes);

export default app;
