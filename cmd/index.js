const axios = require('axios');
const baseURL = 'https://pokeapi.glitch.me';
const pj = require('../package.json');
// pokédex API requires specific format for user agent
// see https://pokedevs.gitbook.io/pokedex/reference
const ua = `leetdex (https://github.com/mariecreel/leetdex, ${pj.version})`;

const pkmn = async (pkmn) => {
  // strip leading zeros. some might try 001 for bulbasaur and get 404,
  // which is annoying considering that's how the national number is 
  // written in the real pokedex
  pkmn = pkmn.replace(/^0+/, '');
  const response = await axios({
    method: 'get',
    baseURL: baseURL,
    url: `/v1/pokemon/${pkmn}`,
    headers: {
      'User-Agent': ua,
    },
  }).catch((error) => {
    console.error(error);
  });
  console.log(JSON.stringify(response.data, null, 2));
};

module.exports = {
  pkmn: pkmn,
};
