import mongoose from "mongoose"

const TerrainSchema = new mongoose.Schema({
  img1: {
    type: [String],
  },
  img2: {
    type: [String],
  },
  img3: {
    type: [String],
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  surface: {
    type: String,
    require: true,
  },
  ville: {
    type: String,
    default: false,
  },
  location: {
    type: String,
    default: false,
  },
})

export default mongoose.model("Terrain", TerrainSchema)
