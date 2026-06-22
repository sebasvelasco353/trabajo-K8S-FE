import { Request, Response, NextFunction } from "express";

// Mock Middleware to protect routes in this specific service
export function authenticateToken(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Format: "Bearer <token>"

  if (!token) return res.status(401).send("Token required");
  next();
}
