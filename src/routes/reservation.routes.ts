import express from "express";
import {
  getAll,
  getById,
  getByUserId,
  createNewReservation,
  deleteReservation,
  modifyReservation,
} from "../controllers/reservations.controllers";

export const reservationsRouter = express.Router();

reservationsRouter.get("/", getAll);
reservationsRouter.get("/:id", getById);
reservationsRouter.get("/byUser/:userId", getByUserId);
reservationsRouter.post("/", createNewReservation);
reservationsRouter.delete("/:id", deleteReservation);
reservationsRouter.put("/:id", modifyReservation);
