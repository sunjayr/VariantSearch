const express = require('express');
const router = express.Router();
const GeneController = require('../controllers/gene-controller')

router.get('/all', GeneController.getGenes);
router.get('/autocomplete/:term',GeneController.getSuggestions);
router.get('/:name', GeneController.getSingleGene)

module.exports = router;