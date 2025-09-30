const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

//parse requests of content-type - application/json
app.use(express.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
//normal use does not delete the database data
//db.sequelize.sync();

//In development, you may need to drop existing tables to re-sync database
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

//simple route
app.get("/", (req,res) => {
    res.json({ message: "Welcome to bicycles application." });
});

require("./routes/bicycle.routes.js")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8080; //8100


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});