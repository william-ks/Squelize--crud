import { NextFunction, Request, Response } from "express";

const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const spliced = error.message.split(":");
  const statusCode = +spliced[1] || 500;
  const message = spliced[0] || "Unexpected Error on server.";

  return res.status(statusCode).json({
    message,
  });
};

export { handleError };
