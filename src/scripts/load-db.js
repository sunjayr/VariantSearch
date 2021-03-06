const fs = require('fs');
const path = require('path');
const gd = require('../models/gene-database');
const config = require('../../config');
const assert = require('assert');

function readData() {
    let dataDir = path.join(path.resolve(__dirname), '..', '..', 'data');
    let data = fs.readFileSync(path.join(dataDir, 'variants.tsv'));
    let fileLines = data.toString().split('\n');
    return fileLines;
}

function createDocuments(data) {
    let documents = [];
    let header = data[0].split('\t').map(x => {
        return x.toLowerCase().split(' ').join('_');
    });
    for (let i = 1; i < data.length; i++) {
        let row = data[i].split('\t');
        let doc = {};
        header.forEach((element,index) => {
            if (row[index] === '' || row[index] === null || row[index] === undefined) {
                doc[element] = '-';
            }
            else {
                doc[element] = row[index];
            }
        });
        documents.push(doc);
    }
    return documents;
}

async function main() {
    let data = readData();
    let docs = createDocuments(data);

    let collectionSize = await gd.getCollectionSize();
    if (collectionSize < 1) {
        let inserted = await gd.insertData(docs);
        if (inserted.result.ok === 1){
            console.log(`Inserted ${inserted.result.n} documents into ${config.collection}`);
        }
    }
    else {
        console.log(`Collection ${config.collection} already contains documents. Size: ${collectionSize}`);
    }
}

main().then(() => {
    process.exit(0);
});
