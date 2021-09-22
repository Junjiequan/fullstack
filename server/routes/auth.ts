import { Request, Response } from "express";
const express = require("express");
const router = express.Router();
const USERS = require("../models/user");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt"); //hasing password
// const crypto = require("crypto"); //saving password with security

router.post("/signup", (req: Request, res: Response) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash: string) => {
    USERS.create({
      username: username,
      password: hash,
    })
      .then(() => {
        res.json({ message: "User Registered successfully" });
      })
      .catch((err: any) => {
        if (err) {
          res.status(400).json({ error: "User Exists!" });
        }
      });
  });
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await USERS.findOne({ username: username });
  if (!user) {
    return res.status(404).json({ error: "User Doesn't Exist!" });
  }
  const hashedPassword = user.password;
  bcrypt.compare(password, hashedPassword, (err, data) => {
    if (err) throw err;
    if (data) {
      return res.status(200).json({ message: "Logged In" });
    } else {
      return res.status(403).json({ error: "Wrong Password" });
    }
  });
});

module.exports = router;
