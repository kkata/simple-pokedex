import { QueryClient, QueryClientProvider } from "react-query";
import { PokemonList } from "./Pokedex/PokemonList";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonList />
    </QueryClientProvider>
  );
};
