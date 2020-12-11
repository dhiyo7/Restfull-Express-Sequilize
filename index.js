const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const Route = require("./src/routes/routes")

dotenv.config()
const app = express();
const port = process.env.PORT || 3000;

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