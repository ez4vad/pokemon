import { useEffect } from "react"
import { apiService } from "../services/ApiService";

export const App = () => {
  useEffect(() => {
    apiService.getPokemonList();
  }, []);
}