const GeneDatabase = require('../models/gene-database');

class GeneController {
    static async getGenes(request, response) {
        let offset = request.query.offset;
        let limit = request.query.batch;
        GeneDatabase.getAllGenes(parseInt(offset), parseInt(limit)).then((data, err) => {
            if (err) {
                response.status(500).json({
                    'request': request.body,
                    error_message: err
                });
            }
    
            response.status(200).json(data);
        });
    }

    static async getSingleGene(request, response) {
        let offset = request.query.offset;
        let limit = request.query.batch;
        let gene = request.params.name;

        GeneDatabase.getSingleGene(gene, parseInt(offset), parseInt(limit)).then((data, err) => {
            if (err) {
                response.status(500).json({
                    'request': request.body,
                    error_message: err
                });
            }
    
            response.status(200).json(data);
        });

    }

    static async getSuggestions(request, response) {
        let prefix = request.params.term;
        GeneDatabase.getSuggestions(prefix).then((data,err) => {
            if (err) {
                response.status(500).json({
                    'request': request.body,
                    error_message: err
                });
            }
            response.status(200).json({
                results: data
            });
        });

    }
}

module.exports = GeneController;