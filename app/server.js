/*	modules	*/ 
const http = require('http');
const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const route = require('./routes/route');

/* configs ands routes */
const config = require('./config/config');


/* Generate App */
const app = express();

app.use(cors({ origin: '*' }));
app.use(logger('dev'));
app.use(helmet({ hidePoweredBy: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* routes definition */
app.use('/', route);

/* server definition */
const server = http.createServer(app);
server.listen(3000)