import { Link, useLoaderData, } from "react-router-dom";
import { pokemonapiService } from "../services/PokemonApiService";

export const loader = async ({ params }) => {
    const pokemon = await pokemonapiService.getPokemonByName(params.pokemonSlug);
    return { pokemon };
}

export const Pokemon = () => {
    const { pokemon } = useLoaderData();
    return (
    <div className="is-flex is-justify-content-center">
    <div className="section">
        <h1 className="title is-1 is-capitalized">{ pokemon.name }</h1>
        <img className="image is-square" src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
    <Link to={`/${pokemon.name}/details`} className="box button is-warning">Show more</Link>
    </div>
    </div>
    );
}