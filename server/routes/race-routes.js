const express = require('express')
const { getRaces, deleteRace } = require('../controllers/race-controller')

const router = express.Router()

router.get('/races', getRaces)
router.delete('/races/:id', deleteRace)

module.exports = router
