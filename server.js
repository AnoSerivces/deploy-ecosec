//Dependencies
const express = require("express");
const cors = require('cors')
const morgan = require('morgan');
require('dotenv').config();
global.reference =0001;

//init app
const app = express();
app.use(cors())

const PORT = process.env.PORT || 8180;

var corsOptions = {
  origin: `http://localhost:8080`,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} 

app.use(morgan('tiny'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/database/connection')

app.use('/', require('./src/routes/index.js'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
