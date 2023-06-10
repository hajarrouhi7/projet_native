import express from "express"
import { createReservation, deleteReservation, getAllReservation, getReservation, updateReservation, updateReservationAvailability } from "../controller/reservation.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//create
router.post("/:hotelid", verifyAdmin, createReservation)
//update
router.put("/:id", verifyAdmin, updateReservation)

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteReservation)
//get
router.get("/:id", getReservation)
//get all
router.get("/", getAllReservation)

// update date of room
router.put("/availability/:id", updateReservationAvailability)
export default router
