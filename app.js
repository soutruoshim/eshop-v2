const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

// Read file env
require('dotenv/config');
const api = process.env.API_URL;

// Middleware
app.use(express.json());
app.use(morgan('tiny'));


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log("Database connection success!");
})
.catch((err)=>{
    console.log(err)
});

// category route
const categoryRoute = require("./routes/categories");
app.use(`${api}/categories`, categoryRoute);


app.listen(3000, ()=>{
    console.log(api);
    console.log("Server running port 3000");
});



