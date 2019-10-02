const assert = require('assert');
const GeneDatabase = require('../src/models/gene-database');
const axios = require('axios');

const autocompleteResults = {
    'CDKN': ['CDKN1C','CDKN2AIPNL','CDKN1B','CDKN2A','CDKN2AIP'],
    'SUN': ['SUN1'],
    'SUNQ': []
}

describe('All Tests', () => {
    it('should return 2 results for PGAM4', () => {
        GeneDatabase.getSingleGene('PGAM4').then((data,err) => {
            assert.equal(data.totalResults, 2);
        });
    });

    it('should return 73 results for CDKL5', () => {
        GeneDatabase.getSingleGene('CDKL5').then((data,err) => {
            assert.equal(data.totalResults, 73);
        });
    });

    it('should return all genes from the collection', () => {
        GeneDatabase.getAllGenes().then((data,err) => {
            assert.equal(data.totalResults, 48516);
        });
    });

    it('should return all prefixes for CDKN', async function() {
        let data = await GeneDatabase.getSuggestions('CDKN');
        for (let gene of data) {
            assert.equal(autocompleteResults['CDKN'].includes(gene), true);
        }
    });

    it('should return all prefixes for SUN', async function() {
        let data = await GeneDatabase.getSuggestions('SUN');
        for (let gene of data) {
            assert.equal(autocompleteResults['SUN'].includes(gene), true);
        }
    });

    it('should return no prefixes for SUNQ', async function() {
        let data = await GeneDatabase.getSuggestions('SUNQ');
        assert.equal(data.length, 0);
    });
});

