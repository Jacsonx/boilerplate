const express = require('express');

const service = require('../services/services');

const routes = express();

routes.get('/usuarios/:id', service.get);


module.exports = routes;