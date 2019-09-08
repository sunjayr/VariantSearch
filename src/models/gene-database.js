const MongoClient = require('mongodb').MongoClient;
const config = require('../../config');
const assert = require('assert');

class GeneDatabase {
    constructor () {
        this.url = config.url;
        this.dbName = config.db;
        this.connected = false;
        this.collection = config.collection;
    }

    connect() {
        return new Promise((resolve, reject) => {
            let options = {useNewUrlParser: true, useUnifiedTopology: true};
            MongoClient.connect(this.url, options).then((client) => {
                this.client = client;
                this.db = client.db(this.dbName);
                this.connected = true;
                console.log(`Successfully connected to MongoDB ${this.url}`);
                resolve();
            }).catch(error => {
                console.log(`An error occurred during connection ${error}`);
                reject(error);
            });     
        });
    }

    async getAllGenes() {
        if (this.connected === false) {
            await this.connect();
        }
        const geneCollection = this.db.collection(this.collection);
        let cursor = geneCollection.find({});
        let result = await cursor.toArray();
        return result;
    }

    async getCollectionSize() {
        if (this.connected === false) {
            await this.connect();
        }
        const geneCollection = this.db.collection(this.collection);
        let result = await geneCollection.estimatedDocumentCount();
        return result;
    }
    
    async insertData(data) {
        if (this.connected === false) {
            await this.connect();
        }
        const geneCollection = this.db.collection(this.collection);
        let result = await geneCollection.insertMany(data);
        return result
    }

    async getGeneMatches() {
        if (this.connected === false) {
            await this.connect();
        }
        const geneCollection = this.db.collection(this.collection);
        //TODO finish this function
    }


}

const gd = new GeneDatabase();
module.exports = gd;