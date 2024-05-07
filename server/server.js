const express = require('express')
const mongoose = require('mongoose')
const raceRoutes = require('./routes/race-routes')

const PORT = 3000
const URL =
	'mongodb+srv://Vadim:Pass1234@123.ltbn0xr.mongodb.net/timetablebox?retryWrites=true&w=majority&appName=123'

const app = express()
app.use(raceRoutes)

mongoose
	.connect(URL)
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.log(`DB connection error: ${err}`))

app.listen(PORT, err => {
	err ? console.log(err) : console.log(`Listening port ${PORT}`)
})
