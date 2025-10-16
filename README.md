# alx-graphql-0x00

## GraphQL Character Query Project

This project demonstrates how to use GraphQL to fetch character details from the Rick and Morty API<a href="https://rickandmortyapi.com/graphql" target="_blank" rel="noopener noreferrer nofollow"></a>.

## Directory Structure
- `character-id-1.graphql`, `character-id-2.graphql`, `character-id-3.graphql`, `character-id-4.graphql`: GraphQL queries for character IDs 1, 2, 3, and 4.
- `character-id-1-output.json`, `character-id-2-output.json`, `character-id-3-output.json`, `character-id-4-output.json`: JSON output files containing the query results.
- `fetch-characters.js`: Node.js script to execute the queries and save results.

## Setup
1. Install Node.js and npm.
2. Run `npm install` to install dependencies.
3. Run `node fetch-characters.js` to execute the queries and generate output files.

## Fields Queried
- id
- name
- status
- species
- type
- gender

## Paginated Characters Query

This section fetches a paginated list of characters from the Rick and Morty API for pages 1, 2, 3, and 4.

### Files
- `characters-page-1.graphql`, `characters-page-2.graphql`, `characters-page-3.graphql`, `characters-page-4.graphql`: GraphQL queries for pages 1–4.
- `characters-page-1-output.json`, `characters-page-2-output.json`, `characters-page-3-output.json`, `characters-page-4-output.json`: JSON outputs for each page.
- `fetch-characters-pages.js`: Node.js script to execute the paginated queries.

### Fields Queried
- id
- name
- status
- image

### Run Instructions
1. Ensure dependencies are installed: `npm install`.
2. Run the script: `node fetch-characters-pages.js`.