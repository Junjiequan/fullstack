import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt"); //hasing password
const crypto = require("crypto"); //saving password with security

const signup = (req: Request, res: Response) => {
  try {
    const { fullname, username, password } = req.body;
    const userId = crypto.randomBytes(16).toString("hex");
    console.log(userId);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

const login = (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log(`username:`, username, `password:`, password);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export { signup, login };
