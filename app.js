// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./api');
const client = require('./db/client');

// client.connect((err, client, done) => {
//   if (err) throw err;
// });

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/api', router);

module.exports = app;
