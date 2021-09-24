import { Request, Response, RequestHandler } from "express";

const USERS = require("../models/user");
const bcrypt = require("bcrypt");
const { createTokens } = require("../JWT");

const signup: RequestHandler = (req: Request, res: Response) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash: string) => {
    USERS.create({
      username: username,
      password: hash,
    })
      .then(() => {
        res.json({ message: "User Registered successfully" });
      })
      .catch((err: never) => {
        if (err) {
          res.status(400).json({ error: "User Exists!" });
        }
      });
  });
};

const login: RequestHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body;

  const user = await USERS.findOne({ username: username });
  if (!user) {
    return res.status(404).json({ error: "User Doesn't Exist!" });
  }
  const hashedPassword = user.password;
  bcrypt.compare(password, hashedPassword, (err, data) => {
    if (err) throw err;
    if (data) {
      const accessToken = createTokens(user);
      res.cookie("access-token", accessToken, {
        maxAge: 2628000,
        httpOnly: true,
      });
      return res.status(200).json({ message: "Logged In" });
    } else {
      return res.status(403).json({ error: "Wrong Password" });
    }
  });
};
export = { signup, login };
