import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/error.middleware";

export const app = express();

// Middleware globaux
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("Z-Chat API is running");
});

// Middleware de gestion des erreurs
app.use(errorHandler);
