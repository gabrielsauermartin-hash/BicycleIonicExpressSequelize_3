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
    const id = req.params.id;
    Bicycle.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Bicycle with id=${id} not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error retrieving bicycle with id=${id}`
            });
        });
};

//Update a bicycle by the ID in the request
exports.update = (req, res) => {
    const id = req.params.id;

    // Verifica que el cuerpo de la petición no esté vacío
    if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(400).send({
            message: "Request body cannot be empty!"
        });
    }

    Bicycle.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Bicycle was updated successfully."
            });
        } else {
            res.status(404).send({
                message: `Cannot update bicycle with id=${id}. Maybe bicycle was not found or request body is empty.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Error updating bicycle with id=${id}`
        });
    });
};

//Delete a bicycle with the specified ID in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Bicycle.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num === 1) {
            res.send({
                message: "Bicycle was deleted successfully!"
            });
        } else {
            res.status(404).send({
                message: `Bicycle with id=${id} not found.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete bicycle with id=${id}`
        });
    });
};