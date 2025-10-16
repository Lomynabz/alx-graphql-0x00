const { GraphQLClient } = require('graphql-request');
const fs = require('fs').promises;

const endpoint = 'https://rickandmortyapi.com/graphql';

const query = `
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
    }
  }
`;

async function fetchCharacter(id, outputFile) {
  const client = new GraphQLClient(endpoint);
  try {
    const data = await client.request(query, { id });
    await fs.writeFile(`character/${outputFile}`, JSON.stringify(data, null, 2));
    console.log(`Data for character ID ${id} saved to ${outputFile}`);
  } catch (error) {
    console.error(`Error fetching character ID ${id}:`, error);
  }
}

async function main() {
  const tasks = [
    fetchCharacter(1, 'character-id-1-output.json'),
    fetchCharacter(2, 'character-id-2-output.json'),
    fetchCharacter(3, 'character-id-3-output.json'),
    fetchCharacter(4, 'character-id-4-output.json'),
  ];
  await Promise.all(tasks);
}

main();