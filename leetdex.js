const yargs = require('yargs');
const pj = require('./package.json')
// pokédex API requires specific format for user agent
// see https://pokedevs.gitbook.io/pokedex/reference
const ua = `leetdex (https://github.com/mariecreel/leetdex, ${pj.version})`

const argv = yargs
    .boolean('ua')
    .argv

if (argv.ua) {
    console.log(`${ua}`)
}
