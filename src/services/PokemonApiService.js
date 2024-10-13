import { BaseApiService } from "./BaseApiService";

export class PokemonApiService extends BaseApiService {
  constructor() {
    super("https://pokeapi.co/api/v2");
  }

  async getPokemonList(offset = 0, limit = 20) {
    const pokemonList = await this.request(`/pokemon?offset=${offset}&limit=${limit}`);
    return pokemonList?.results;
  }

  async getPokemonByName(name) {
    const pokemon = await this.request(`/pokemon/${name}`);
    return pokemon;
  }
}

export const pokemonapiService = new PokemonApiService();
