import Client from "../model/Client.js"
import { createError } from "../utils/error.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(req.body.password, salt)

  try {
    const newClient = new Client({
      /*username: req.body.username,
      email: req.body.email,*/
      ...req.body,
      password: hash,
    })

    await newClient.save()
    res.status(200).send("Client has beeb created.")
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const client = await Client.findOne({ username: req.body.username })
    if (!client) return next(createError(404, "Client not found"))

    const isPasswordCorrect = await bcrypt.compare(req.body.password, client.password)
    if (!isPasswordCorrect) return next(createError(404, "Wrong Password or username"))

    const token = jwt.sign({ id: client._id, isAdmin: client.isAdmin }, process.env.JWT)

    const { password, isAdmin, ...otherDetails } = client._doc

    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin })
  } catch (err) {
    next(err)
  }
}
