import {
  fetchAllReservations,
  fetchReservation,
  fetchReservationsByUserId,
  addNewReservation,
  removeReservation,
  modifyReservation,
} from "../models/reservation.model";
import { reservation } from "../shared/types";
import { createNotFoundError } from "../errors/not-found";

export const getAllReservations = async (): Promise<reservation[]> => {
  return await fetchAllReservations();
};

export const getReservationById = async (id: string) => {
  return await fetchReservation(id);
};

export const getReservationsByUserId = async (id: string) => {
  return await fetchReservationsByUserId(id);
};

export const saveNewReservation = async (NewReservation: reservation) => {
  return await addNewReservation(NewReservation);
};

export const deleteReservationById = async (id: string) => {
  const exists = await getReservationById(id);
  if (exists) {
    return await removeReservation(id);
  } else {
    throw createNotFoundError("cant delete, reservation does not exist");
  }
};

export const editReservation = async (
  reservationId: string,
  newData: Omit<reservation, "id">,
) => {
  const exists = await getReservationById(reservationId);
  if (exists) {
    return modifyReservation(reservationId, newData);
  } else {
    throw createNotFoundError("cant edit, the reservation does not exist");
  }
};
