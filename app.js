const express = require('express');
var path = require('path');
var app = express();
const port = 3000;


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});