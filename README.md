# VariantSearch

## Purpose

Create a web application that allows a user to search for genomic variants by gene name and display the results in a tabular view.

## Features

1. Allows the user to enter a gene name to search for variants in that gene and displays the results in a table that shows various attributes associated with each genomic variant.

2. Provides an auto-suggest feature for entering the gene name.

3. Provides two RESTful endpoints supporting the functionality listed in steps 1 and 2.

## Datasource

A zipped TSV file of variants is available in /data/variants.tsv.zip. Each row in the TSV file represents a genomic variant and contains a Gene column with the gene name. A variant will belong to one and only one gene, but multiple variants may belong to the same gene.

## Installation
1. clone the repository into a directory
`git clone https://github.com/sunjayr/VariantSearch.git`

2. Execute `npm install`

3. If mongo is not installed on your machine, install mongo 4.2 for your OS: https://docs.mongodb.com/manual/installation/

4. Start the mongo daemon `mongod` running on the port 27017

5. Create a database within the local server called `geneData`

6. Create a collection under `geneData` called `geneCollection`

7. From the root directory of the repository, run the load-db script `node ./src/scripts/load-db.js`

8. Once the DB is successfully, loaded execute `npm start` and navigate to `localhost:3000` on Chrome
