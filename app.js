const express = require('express');
const path = require('path');
const config = require('./config');

const app = express();
const routes = require('./src/routes/gene-routes');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/genes', routes);

app.listen(config.port, () => {
    console.log(`Running on port ${config.port}`);
});