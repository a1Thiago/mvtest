const { Client } = require('multiversus.js');

const client = new Client();

(async () => {

  await client.login('a1multi', 'Bq8vokk8.');

})();

export const search = async () => {

  try {
    const results = await client?.profiles?.search('a1th') ?? null
    return results.results
  } catch (error) {
    return
  }

}