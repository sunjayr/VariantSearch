const express = require('express');
const router = express.Router();
const GeneController = require('../controllers/gene-controller')

router.get('/all', GeneController.getGenes);
router.post('/autocomplete/:term', (request, response) => {
    response.send('Not implemented yet');
});
router.get('/:name', GeneController.getSingleGene)

module.exports = router;