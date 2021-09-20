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
          res.status(400).json({ error: err });
          console.log(`USER EXISTED`);
        }
      });
  });
});
// router.post("/login", login);

module.exports = router;
