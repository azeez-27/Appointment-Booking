const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeSlotsSchema = new Schema({
    startTime:{
        type: Date
    },
    endTime:{
        type: Date
    },
    isBooked:{
        type: Boolean
    }
},{collection: 'time-slots'})

module.exports = mongoose.model('time-slots', timeSlotsSchema )