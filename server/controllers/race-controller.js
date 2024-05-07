const Race = require('../models/race')

const handleError = (res, error) => {
	res.status(500).json({ error })
}

const getRaces = (req, res) => {
	Race.find()
		.then(races => {
			res.status(200).json(races)
		})
		.catch((err) => handleError(res, err))
}

const deleteRace = (req, res) => {
	Race.findByIdAndDelete(req.params.id)
		.then(result => {
			res.status(200).json(result)
		})
		.catch(err => handleError(res, err))
}

module.exports = {
	getRaces,
  deleteRace,
}
