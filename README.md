# leetdex
CLI to fetch information from PokéDex. Built with node.js. Data retrieved from [PokéDex API](https://pokedevs.gitbook.io/pokedex/), provided by [PokeDevs](https://github.com/PokeDevs).

# Install
- Clone this repository
- Run `yarn install` in cloned directory
- Run `yarn test` to confirm successful installation

# Options

```
Options:
      --help     Show help                                             [boolean]
      --version  Show version number                                   [boolean]
  -p, --pkmn     request information about specific pokémon using pokémon name
                 or pokédex number                                      [string]
```

# Examples

## Request more information about a Pokémon by name:
```
$ node leetdex.js -p buneary
[
  {
    "number": "427",
    "name": "Buneary",
    "species": "Rabbit",
    "types": [
      "Normal"
    ],
    "abilities": {
      "normal": [
        "Run Away",
        "Klutz"
      ],
      "hidden": [
        "Limber"
      ]
    },
    "eggGroups": [
      "Field",
      "Human-Like"
    ],
    "gender": [
      50,
      50
    ],
    "height": "1'04\"",
    "weight": "12.1 lbs.",
    "family": {
      "id": 218,
      "evolutionStage": 1,
      "evolutionLine": [
        "Buneary",
        "Lopunny"
      ]
    },
    "starter": false,
    "legendary": false,
    "mythical": false,
    "ultraBeast": false,
    "mega": false,
    "gen": 4,
    "sprite": "https://cdn.traction.one/pokedex/pokemon/427.png",
    "description": "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur."
  }
]
```

## Request information for a pokemon by national Pokédex number:
```
$ node leetdex.js --pkmn 1
[
  {
    "number": "1",
    "name": "Bulbasaur",
    "species": "Seed",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": {
      "normal": [
        "Overgrow"
      ],
      "hidden": [
        "Chlorophyll"
      ]
    },
    "eggGroups": [
      "Monster",
      "Grass"
    ],
    "gender": [
      87.5,
      12.5
    ],
    "height": "2'04\"",
    "weight": "15.2 lbs.",
    "family": {
      "id": 1,
      "evolutionStage": 1,
      "evolutionLine": [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur"
      ]
    },
    "starter": true,
    "legendary": false,
    "mythical": false,
    "ultraBeast": false,
    "mega": false,
    "gen": 1,
    "sprite": "https://cdn.traction.one/pokedex/pokemon/1.png",
    "description": "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow."
  }
]
```

You can also use leading zeros, which would typically return 404 response from the Pokédex API:
```
$ node leetdex.js --pkmn 001
[
  {
    "number": "1",
    "name": "Bulbasaur",
    "species": "Seed",
    "types": [
      "Grass",
      "Poison"
    ],
    "abilities": {
      "normal": [
        "Overgrow"
      ],
      "hidden": [
        "Chlorophyll"
      ]
    },
    "eggGroups": [
      "Monster",
      "Grass"
    ],
    "gender": [
      87.5,
      12.5
    ],
    "height": "2'04\"",
    "weight": "15.2 lbs.",
    "family": {
      "id": 1,
      "evolutionStage": 1,
      "evolutionLine": [
        "Bulbasaur",
        "Ivysaur",
        "Venusaur"
      ]
    },
    "starter": true,
    "legendary": false,
    "mythical": false,
    "ultraBeast": false,
    "mega": false,
    "gen": 1,
    "sprite": "https://cdn.traction.one/pokedex/pokemon/1.png",
    "description": "While it is young, it uses the nutrients that are stored in the seeds on its back in order to grow."
  }
]
```
