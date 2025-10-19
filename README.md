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

## Episode Query
- **File**: `episode/episode-page-1.graphql`
- **Description**: A GraphQL query to fetch details of a specific episode by its ID. The query retrieves the `id`, `name`, `air_date`, and `episode` fields.
- **Example Usage**:
  - Query: `episode-page-1.graphql`
  - Variables: `{ "id": "1" }`
  - Expected Output: See `episode-page-1-output.json` (if created).

  # alx-rick-and-morty-app

A Next.js application integrated with GraphQL to fetch data from the Rick and Morty API.

## Setup
- **Repository**: `alx-graphql-0x01`
- **Directory**: `alx-rick-and-morty-app`
- **Files**:
  - `graphql/apolloClient.ts`: Configures Apollo Client for the Rick and Morty GraphQL API.
  - `graphql/queries.ts`: Defines the `GET_EPISODES` query to fetch episodes with pagination and filtering.
  - `pages/_app.tsx`: Wraps the app with `ApolloProvider` for GraphQL integration.
- **Dependencies**:
  - `@apollo/client` and `graphql` for GraphQL queries.
  - `@types/graphql` for TypeScript support (optional).
  - Next.js with TypeScript, ESLint, and Tailwind CSS.

## Running the App
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open `http://localhost:3000` in a browser.

## Next Steps
- Implement components to use the `GET_EPISODES` query to display episode data.