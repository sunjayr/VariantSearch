const fs = require('fs');
const GeneService = require('../services/gene-service');


async function main() {
    let gs = new GeneService('mongodb://localhost:27017','test_new_db', 'test_collections');
    await gs.getData();
}


main().then(() => {
    process.exit(0);
});
