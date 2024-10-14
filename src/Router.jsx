import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home, loader as homeLoader } from "./pages/Home";
import { Pokemon, loader as pokemonLoader } from "./pages/Pokemon";
import { PokemonDetails, loader as pokemonDetailsLoader } from "./pages/PokemonDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
        loader: homeLoader,
        children: [
          {
            path: ":pokemonSlug",
            Component: Pokemon,
            loader: pokemonLoader,
          },
        ],
      },
    ],
  },
  {
    path: '/:pokemonSlug/details',
    Component: PokemonDetails,
    loader: pokemonDetailsLoader,
  }
]);

export const Router = () => <RouterProvider router={router} />;
