import express from "express"
import { countByVille, countByType, createTerrain, deleteTerrain, getAllTerrain, getTerrain, getTerrains, updateTerrain } from "../controller/Terrain.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

//create
router.post("/", verifyAdmin, createTerrain)
//update
router.put("/:id", verifyAdmin, updateTerrain)
//delete
router.delete("/:id", verifyAdmin, deleteTerrain)
//get
router.get("/find/:id", getTerrains)
//get all
router.get("/", getAllTerrain)

router.get("/countByCity", countByVille)
router.get("/countByType", countByType)

export default router
