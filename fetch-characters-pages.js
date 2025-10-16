const { GraphQLClient } = require('graphql-request');
const fs = require('fs').promises;

const endpoint = 'https://rickandmortyapi.com/graphql';

const query = `
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
        status
        image
      }
    }
  }
`;

async function fetchCharactersPage(page, outputFile) {
  const client = new GraphQLClient(endpoint);
  try {
    const data = await client.request(query, { page });
    await fs.writeFile(`character/${outputFile}`, JSON.stringify(data, null, 2));
    console.log(`Data for page ${page} saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error fetching page ${page}:`, error.response?.errors || error.message);
  }
}

async function main() {
  const tasks = [
    fetchCharactersPage(1, 'characters-page-1-output.json'),
    fetchCharactersPage(2, 'characters-page-2-output.json'),
    fetchCharactersPage(3, 'characters-page-3-output.json'),
    fetchCharactersPage(4, 'characters-page-4-output.json'),
  ];
  await Promise.all(tasks);
}

main().catch(console.error);