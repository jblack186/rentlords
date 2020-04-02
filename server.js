const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();




  server.use(cors());

server.use(bodyParser())
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send({hi: "there"});
})




module.exports = server;

