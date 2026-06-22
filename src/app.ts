import express, { Express, Response } from "express";
import { reservationsRouter } from "./routes/reservation.routes";
import { logger } from "./middleware/logger.middleware";
import { authenticateToken } from "./middleware/auth.middleware";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);

app.get("/health", (_req, res: Response) => {
  res.status(200).json({
    status: "ok",
  });
});

app.use("/api/reservations", authenticateToken, reservationsRouter);

app.listen(port, () => {
  console.log(`reservations service running`);
});
