const Bike = require('..models/bike')
const router = express.Router()

//CRUD
//Create Bike
const createBike = async() => {};
//Read a Bike
const readBike = async() => {};
//Find a specific Bike:{:id}
const findABike = async() => {};
//Update a bike
const  updateBike = async() => {};
//Delete a Bike
const deleteBike = async() => {};

module.exports = { 
    createBike,
    readBike,
    updateBike,
    deleteBike,
}