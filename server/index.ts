import { Request, Response } from "express";

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.ts");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello I am server  eys!!!!!");
});

mongoose.connect(
  process.env.DB_LOGIN,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    if (!res) {
      console.log("server login failed");
    }
    console.log("MongoDB connected");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
