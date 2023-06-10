import mongoose from "mongoose"

const ReservationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    number: {
      type: Number,
      require: true,
    },
    dateBook: {
      type: Date,
      require: true,
    },
    bookTime: {
      type: TimeRanges,
      require: true,
    },
    duration: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Reservation", ReservationSchema)
