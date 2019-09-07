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

