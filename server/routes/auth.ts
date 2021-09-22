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
        res.json("USER REGISTERED");
      })
      .catch((err: any) => {
        if (err) {
          res.status(400).json({ error: "USER EXISTED!" });
        }
      });
  });
});

router.post("/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await USERS.findOne({ username: username });

  if (!user) {
    res.status(404).json({ error: "USER DOESN'T EXIST!" });
  } else {
    res.json("LOGGED IN");
  }
});

module.exports = router;
