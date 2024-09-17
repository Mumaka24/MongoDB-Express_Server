// schema

const mangoose = require('mangoose')

const bikeSchema = new mangoose.Schema({
    numberofwheels: Number,
    color: String,
    pedals: Number,
})

const Bike = mangoose.model("Bike", bikeSchema)

module.exports = Bike