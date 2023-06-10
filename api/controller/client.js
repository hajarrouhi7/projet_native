import Client from "../model/Client.js"

export const updateClient = async (req, res, next) => {
  try {
    const updateClient = await Client.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    res.status(200).json(updateClient)
  } catch (error) {
    res.status(500).json(err)
  }
}

export const getClient = async (req, res, next) => {
  try {
    const client = await Client.findById(req.params.id)
    res.status(200).json(client)
  } catch (error) {
    res.status(500).json(err)
  }
}

export const deleteClient = async (req, res, next) => {
  try {
    await Client.findByIdAndDelete(req.params.id)
    res.status(200).json("Client has be deleted")
  } catch (error) {
    res.status(500).json(err)
  }
}

export const getAllClient = async (req, res, next) => {
  try {
    const clients = await Client.find()
    res.status(200).json(clients)
  } catch (error) {
    next(error)
  }
}
