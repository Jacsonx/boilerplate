const express = require('express');

const service = require('../services/services');

const routes = express();

routes.get('/', service.get);


module.exports = routes;