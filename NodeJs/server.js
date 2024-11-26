const express = require("express");
const dataRoute = require('./route/dataRoute');
const cors = require('cors');



const app = express();
const port = 8080;

// Use CORS middleware
app.use(cors());

app.use(express.json());

app.use(dataRoute);


app.listen(port, () => console.log('app listening on port ' + port));