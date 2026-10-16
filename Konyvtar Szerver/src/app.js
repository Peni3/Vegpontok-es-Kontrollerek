const express = require('express');
const konyvRouter = require('./routes/konyvRoutes');

const app = express();
app.use('/api/konyvek', konyvRouter);
module.exports = app;