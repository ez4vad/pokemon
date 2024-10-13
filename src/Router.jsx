import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root";
import { Home, loader as homeLoader } from "./pages/Home";
import { Pokemon, loader as pokemonLoader } from "./pages/Pokemon";

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
            path: ":pokemonId",
            Component: Pokemon,
            loader: pokemonLoader,
          },
        ],
      },
    ],
  },
]);

export const Router = () => <RouterProvider router={router} />;
