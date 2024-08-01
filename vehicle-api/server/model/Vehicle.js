const mongoose = require('mongoose');

const schema = mongoose.Schema({
    VehicleMake: String,
    VehicleModel: String,
    VehicleYear: Number,
    VehicleLastServiceDate: String,
    VehicleMileage: Number,
},{versionKey: false});

module.exports = mongoose.model('Vehicle', schema);