const express = require('express');
const app = express();
const {config} = require('./config');
const indexRouter = require('./src/routes/index')
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/', indexRouter);
app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});