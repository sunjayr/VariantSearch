const express = require('express');
const router = express.Router();
const GeneDatabase = require('../models/gene-database');
const url = 'mongodb://localhost:27017';
const db = 'geneData';
const collection = 'geneCollection';
let geneModel = new GeneDatabase(url, db, collection);

router.get('/', (request, response) => {
    geneModel.getAllGenes().then((data, err) => {
        if (err) {
            response.status(500).json({
                'request': request.body,
                error_message: err
            });
        }

        response.status(200).json({
            result: data
        });
    });
});

router.post('/autocomplete/:term', (request, response) => {
    response.send('Not implemented yet');
});

router.post('/:name', (request, response) => {
    response.send('Not implemented yet');
});

module.exports = router;