const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const Route = require("./src/routes/routes")


const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(port, () => {
    console.log('====================================');
    console.log("Server listening port: " + port);
    console.log('====================================');
})

app.use(logger("dev"));
app.use(cors());



Route(app)