const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentsSchema = new Schema({
    slotId:{
        type: String
    },
    userDetails:{
        name: {
            type: String
        },
        email:{
            type: String
        }
    },
    
},{collection: 'appointments'})

module.exports = mongoose.model('appointments', appointmentsSchema )