import Terrain from "../model/Terrain.js"

export const createTerrain = async (req, res, next) => {
  const newTerrain = new Terrain(req.body)
  try {
    const savedTerrain = await newTerrain.save()
    res.status(200).json(savedTerrain)
  } catch (err) {
    next(err)
  }
}

export const updateTerrain = async (req, res, next) => {
  try {
    const updateTerrain = await Terrain.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updateTerrain)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteTerrain = async (req, res, next) => {
  try {
    await Terrain.findByIdAndDelete(req.params.id)
    res.status(200).json("Terrain has be deleted")
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getTerrains = async (req, res, next) => {
  try {
    const Terrain = await Terrain.findById(req.params.id)
    res.status(200).json(Terrain)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllTerrain = async (req, res, next) => {
  const { min, max, ...other } = req.query
  try {
    const terrains = await Terrain.find({ ...other, cheapestPrice: { $gt: min | 1, $lt: max || 999 } }).limit(req.query.limit)
    res.status(200).json(terrains)
  } catch (error) {
    next(error)
  }
}

export const countByVille = async (req, res, next) => {
  const ville = req.query.ville.split(",")
  try {
    const list = await Promise.all(
      cities.map((ville) => {
        return Terrain.countDocuments({ ville: ville })
      })
    )
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}
export const countByType = async (req, res, next) => {
  try {
    const TerrainConut = await Terrain.countDocuments({ type: "Terrain" })

    res.status(200).json([
      { type: "terrain", count: TerrainConut },
    ])
  } catch (error) {
    next(error)
  }
}

