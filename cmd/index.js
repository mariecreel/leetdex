const axios = require('axios');
const baseURL = 'https://pokeapi.glitch.me';
const pj = require('../package.json');
// pokédex API requires specific format for user agent
// see https://pokedevs.gitbook.io/pokedex/reference
const ua = `leetdex (https://github.com/mariecreel/leetdex, ${pj.version})`;

// commands
const pkmn = async (pkmn) => {
  const response = await axios({
    method: 'get',
    baseURL: baseURL,
    url: `/v1/pokemon/${pkmn}`,
    headers: {
      'User-Agent': ua,
    },
  }).catch(error => {
      console.error(error)
  });
  return(response.data);
};

module.exports = {
  pkmn: pkmn,
};
