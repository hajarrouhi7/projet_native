import Reservation from "../model/Reservation.js"
//import { createError } from "../utils/error.js"

export const createReservation = async (req, res, next)
  const newReservation = new Reservation(req.body)

  try {
    const savedReservation = await newReservation.save()
    res.status(200).json(savedReservation)
  } catch (err) {
    next(err)
  }


export const updateReservation = async (req, res, next) => {
  try {
    const updateReservation = await Reservation.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updateReservation)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getReservation= async (req, res, next) => {
  try {
    const Reservation = await Reservation.findById(req.params.id)
    res.status(200).json(Reservation)
  } catch (err) {
    res.status(500).json(err)
  }
}

export const deleteReservation = async (req, res, next) => {

  try {
    res.status(200).json("Reservation has be deleted")
  } catch (err) {
    res.status(500).json(err)
  }
}

export const getAllReservation = async (req, res, next) => {
  try {
    const Reservations = await Reservation.find()
    res.status(200).json(Reservations)
  } catch (err) {
    next(err)
  }
}

export const updateReservationAvailability = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "reservation._id": req.params.id },
    )
    res.status(200).json("Reservation status has be updated")
  } catch (err) {
    next(err)
  }
}
