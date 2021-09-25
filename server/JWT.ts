import type { Request, Response, NextFunction, RequestHandler } from "express";

interface Iuser {
  username: string;
  id: string;
}
interface IRequest extends Request {
  authenticated: boolean;
  userData: Iuser;
}

const { sign, verify } = require("jsonwebtoken");

const createTokens = (user: Iuser): void => {
  const accessToken = sign(
    {
      username: user.username,
      id: user.id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
  return accessToken;
};

const validateToken: RequestHandler = (
  req: IRequest,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies["access-token"];
  if (!accessToken)
    return res.status(401).json({ error: "User Not Authenticated!" });

  try {
    const validToken = verify(accessToken, process.env.JWT_SECRET);
    if (validToken) {
      req.authenticated = true;
      req.userData = validToken;
      return next();
    }
  } catch (err) {
    return res.status(401).json({ error: err });
  }
};

export { createTokens, validateToken };
