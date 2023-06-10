import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      unique: true,
    },
    lastName: {
      type: String,
      require: true,
      unique: true,
    },
    numberPhone: {
      type: Number,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
)

export default mongoose.model("Client", ClientSchema)
