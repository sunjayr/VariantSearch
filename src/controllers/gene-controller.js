const GeneDatabase = require('../models/gene-database');

class GeneController {
    static async getGenes(request, response) {
        GeneDatabase.getAllGenes().then((data, err) => {
            if (err) {
                response.status(500).json({
                    'request': request.body,
                    error_message: err
                });
            }
    
            response.status(200).json(data);
        });
    }
}

module.exports = GeneController;