const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const routes = require('./src/controllers/routes');

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('/genes', routes);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});