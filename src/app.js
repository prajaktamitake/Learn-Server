const express = require("express");
require("../src/db/connect");

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
const port =process.env.PORT || 8080;

app.use(express.json());
app.use('/api', require('./routes/regUserRoutes'));
app.use('/images', express.static('images'));

app.listen(port, ()=>{
    console.log(`connection is live as on a port no. ${port}`);
})

