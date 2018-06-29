const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log('o ye');
    next();
});

app.use((req, res, next) => {
    res.send('First mean response');
});

module.exports = app;