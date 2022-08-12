const { City } = require('../models')

const getCities = async (req, res) => {
  const cities = await City.findAll()
  res.json({
    status: res.statusCode,
    data: {
      cities
    }
  })
}

const addCity = async (req, res) => {
  console.log(req.body)
  await City.create({
    ...req.body
  })
    .then(() => {
      res.json({
        status: res.statusCode,
        message: "Success"
      })
    })
    .catch(() => {
      res.json({
        status: res.statusCode,
        message: "Failed"
      })
    })
}

module.exports = {
  getCities,
  addCity
}