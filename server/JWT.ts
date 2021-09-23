import type { Request, Response, NextFunction, RequestHandler } from "express";

interface Iuser {
  username: string;
  id: string;
}
interface IRequest extends Request {
  authenticated: boolean;
  userData: undefined;
}

const { sign, verify } = require("jsonwebtoken");
const SECRET = "SECRET_INVISIBLE_KEY";

const createTokens = (user: Iuser): void => {
  const accessToken = sign({ username: user.username, id: user.id }, SECRET, {
    expiresIn: "30d",
  });

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
    const validToken = verify(accessToken, SECRET);
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
