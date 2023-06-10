import express from "express"
import { deleteClient, getAllClient, getClient, updateClient } from "../controller/client.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

/*router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user,you are login")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user,you are login and you can delete acount")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("Hello admin,you are login and you can delete all acount")
}) 
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("Hello user,you are login and you can delete acount")
}) 
router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("Hello user,you are login")
})*/

//update
router.put("/:id", verifyUser, updateClient)
//delete
router.delete("/:id", verifyUser, deleteClient)
//get
router.get("/:id", verifyUser, getClient)
//get all
router.get("/", verifyAdmin, getAllClient)

export default router
