const express = require('express');
const mongoose = require('mongoose');
const Vehicle = require('./model/Vehicle');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectionString = 'mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/Vehicle?retryWrites=true&w=majority';

mongoose.connect(connectionString).then(() => {
    console.log('Connected to MongoDB');
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/vehicle', async (req, res) => {
        const result = await Vehicle.find();
        res.json(result);
    })

    app.get('/vehicle/:id', async (req, res) => {
        const result = await Vehicle.findOne({ _id: req.params.id });
        res.json(result);
    });

    app.post("/vehicle", async (req, res) => {
        const result = await Vehicle.create(req.body)
        res.json(result);
    })

    app.delete("/vehicle/:id", async (req, res) => {
        const result = await Vehicle.deleteOne({ _id: req.params.id });
        res.json(result);
    })

    app.put("/vehicle/:id", async (req, res) => {
        const result = await Vehicle.updateOne({ _id: req.params.id }, req.body);
        res.json(result);
    })

    app.listen(3000, () => {
        console.log("Server Started at port 3000");
    })

})
