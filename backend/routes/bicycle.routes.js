module.exports = app => {
    const bicycles = require("../controllers/bicycle.controllers.js");

    var router = require("express").Router();

    //Create a new bicycle
    router.post("/", bicycles.create);

    //Retrieve all bicycles
    router.get("/", bicycles.finAll);

    //Retrieve a single bicycle with an ID
    router.get("/:id", bicycles.findOne);

    //Update a bicycle with an ID
    router.put("/:id", bicycles.update);

    //Delete a bicycle with an ID
    router.delete("/:id", bicycles.delete);

    app.use('/api/bicycles', router); // app.use('/my-bicycles', router);
};