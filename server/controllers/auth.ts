import { Request, Response } from "express";

const jwt = require("jsonwebtoken");

const SIGNUP = require("../models/Signup");
const bcrypt = require("bcrypt"); //hasing password
const crypto = require("crypto"); //saving password with security

const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hash(password, 10);
  const newUser = new SIGNUP({
    username: username,
    password: hashedPassword,
  });
  try {
    const RegisteredUser = await newUser.save();
    res.json(RegisteredUser);
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
