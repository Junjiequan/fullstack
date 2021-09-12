import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.ts");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("hello I am server  eys!!!!!");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
