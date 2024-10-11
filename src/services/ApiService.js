import { BaseApiService } from "./BaseApiService";

export class ApiService extends BaseApiService {


constructor() {
    super('https://pokeapi.co/api/v2')
}

    async getPokemonList() {
        const pokemonList = await this.request('/pokemon')
        console.log(pokemonList);
    }
}

export const apiService = new ApiService();