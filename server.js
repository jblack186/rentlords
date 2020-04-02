const express = require('express');
const helmet = require('helmet');
const session = require('express-session'); //install express session
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const pgp = require('pg-promise')()
const server = express();




  server.use(cors());


server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send({hi: "there"});
})

//ef


module.exports = server;

