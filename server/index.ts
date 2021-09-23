import { Request, Response } from "express";

interface Username {
  username: string;
}
interface IRequest extends Request {
  userData: Username;
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.ts");
const { validateToken } = require("./JWT");

const app = express();
const PORT = process.env.PORT || 5000;
const origin = "http://localhost:3000";

require("dotenv").config();

app.use(cors({ credentials: true, origin: origin }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/auth", authRoutes);

app.get("/profile", validateToken, (req: IRequest, res: Response) => {
  res.json(req.userData.username);
});

mongoose.connect(
  process.env.DB_LOGIN,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req: Request, res: Response) => {
    if (!res) {
      console.log("server login failed");
    }
    console.log("MongoDB connected");
  }
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
