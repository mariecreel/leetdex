const axios = require('axios');
const baseURL = 'https://pokeapi.glitch.me';
const pj = require('../package.json');
// pokédex API requires specific format for user agent
// see https://pokedevs.gitbook.io/pokedex/reference
const ua = `leetdex (https://github.com/mariecreel/leetdex, ${pj.version})`;

// commands
const pkmn = (pkmn) => {
  console.log(pkmn);
};

module.exports = {
  pkmn: pkmn,
};
