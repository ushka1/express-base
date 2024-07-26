import { NextFunction, Request, Response } from 'express';

export const stats: Record<string, number> = {};

export function statsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  stats[req.path] ??= 0;
  stats[req.path]++;

  return next();
}
