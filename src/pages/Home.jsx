import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { pokemonapiService } from "../services/PokemonApiService";
import { clsx } from "clsx";
import { useState } from "react";

export const loader = async () => {
  const pokemonList = await pokemonapiService.getPokemonList(0, 1000);
  return { pokemonList };
};

export const Home = () => {
  const { pokemonList } = useLoaderData();
  const [search, setSearch] = useState('');

  const filteredPokemonList = pokemonList.filter(({ name }) => {
    return name.toLowerCase().includes(search.trim().toLowerCase());
  });

  return (
    <div className="section">
      <div className="columns">
        <div className="column is-one-fifth">
          <article className="panel is-warning">
            <div className="panel-block">
              <p className="control has-icons-left">
                <input
                  className="input is-warning"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search"
                />
                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true"></i>
                </span>
              </p>
            </div>
            <div className="scroll-list">
              {filteredPokemonList.map(({ name }) => {
                return (
                  <NavLink
                    key={name}
                    to={`/${name}`}
                    className={({ isActive }) =>
                      clsx("panel-block is-capitalized", {
                        "is-active": isActive,
                      })
                    }
                  >
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    {name}
                  </NavLink>
                );
              })}
            </div>
          </article>
        </div>
        <div className="column">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

