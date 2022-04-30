const yargs = require('yargs');
const { pkmn } = require('./cmd/index');
const argv = yargs
  .option('pkmn', {
    alias: 'p',
    describe:
      'request information about specific pokémon using pokémon name or pokédex number',
    type: 'string',
  })
  .check((argv, options) => {
    const pkmn = argv.pkmn;
    if (pkmn.match(/^[a-z0-9]+$/i)) {
      return true;
    }
    // prevent pkmn from executing if invalid data is passed
    argv.pkmn = undefined;
    throw new Error(
      'pkmn accepts pokémon name (e.g., tsareena) or pokédex number (e.g., 763)'
    );
  }).argv;

// only run commands if we aren't testing the validation above
if (require.main === module) {
  if (typeof argv.pkmn !== 'undefined') {
    let data = {};
    (async () => {
      data = await pkmn(argv.pkmn);
      console.log(JSON.stringify(data, null, 2));
    })();
  }
}

// export argv for testing, avoid running into issues with the imports during testing
module.exports = argv;
