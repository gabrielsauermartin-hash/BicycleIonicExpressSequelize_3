const db = require("../models");
const Bicycle = db.bicycles;
const Op = db.sequelize.Op;

//Create and save a new bicycle
exports.create = (req, res) => {
    //Validate request
    if (!req.body.brand) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    }

    //Create a bicycle
    const bicycle = {
        brand: req.body.brand,
        model: req.body.model
    };

    //Save bicycle in the database
    Bicycle.create(bicycle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating a bicycle."
            });
        });
};

//Retrieve all bicycles from the database
exports.findAll = (req, res) => {
    Bicycle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving bicycles."
            });
        });
};

//Find a single bicycle with an ID
exports.findOne = (req, res) => {

};

//Update a bicycle by the ID in the request
exports.update = (req, res) => {

};

//Delete a bicycle with the specified ID in the request
exports.delete = (req, res) => {

};