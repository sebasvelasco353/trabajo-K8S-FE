
import { Request, Response, NextFunction } from 'express';

export const logger = (req: Request, _res: Response, next: NextFunction) => {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();

  console.log({
    "dateTime": timestamp,
    "method": method,
    "endpoint": url
  })

  // Aqui llamaria a Dynatrace o algun otro proveedor de servicios de centralized logger.
  next();
};
