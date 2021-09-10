import { Request, Response } from "express";

const express = require("express");
// const cors = require('cors');  //In case cross-origin erro pops up

const authRoutes = require("./routes/auth.ts");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req: Request, res: Response) => {
  res.send("hello I am server!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
