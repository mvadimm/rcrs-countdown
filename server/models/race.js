const mongoose = require('mongoose')

const Schema = mongoose.Schema

const raceSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
})

const Race = mongoose.model('Race', raceSchema)

module.exports = Race
