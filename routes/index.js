const router = require('express').Router()

const { getCities, addCity } = require('../controllers/CityController')

router.get('/cities', getCities)
router.post('/cities', addCity)

module.exports = router