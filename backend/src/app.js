const express = require('express');
const bodyParser = require('body-parser');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/api/notifications', notificationRoutes);

module.exports = app;