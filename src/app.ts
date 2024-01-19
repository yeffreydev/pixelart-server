import express from "express";
import cors from "cors";
import morgan from "morgan";

//db connection
import "./config/bd";
import routes from "./router";

//express app.
const app = express();

app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

//routes
app.use("/", routes);

export default app;
