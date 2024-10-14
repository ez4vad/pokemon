import { Link, useLoaderData } from "react-router-dom";
import { pokemonapiService } from "../services/PokemonApiService";

export const loader = async ({ params }) => {
  const [pokemon, species] = await Promise.all([
    pokemonapiService.getPokemonByName(params.pokemonSlug),
    pokemonapiService.getPokemonSpecies(params.pokemonSlug)
  ])
  return { pokemon, species };
};

export const PokemonDetails = () => {
  const { pokemon, species } = useLoaderData();

  const titleJa = species.names.find(({language}) => language.name === "ja")?.name;
  const titleJaHrkt = species.names.find(({language}) => language.name === "ja-Hrkt")?.name;
  const title = titleJa || titleJaHrkt || pokemon.name;


  return (
    <>
    <Link to={`/`} className="tag is-danger is-absolute">
    Go to List
    <button className="delete is-small"></button>
  </Link>
            <div style={{backgroundColor: species.color.name}} className="section full-height is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
                <h1 className="is-title is-uppercase has-text-black">{pokemon.name}({title})</h1>
                    <img className="image is-square"
                     src={pokemon.sprites.other["official-artwork"].front_default}
                      alt={pokemon} />
            </div>
    </>
  );
};
