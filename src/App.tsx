import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazyImport } from "./utils/lazyImport";

const { Pokedex } = lazyImport(() => import("./Pokedex"), "Pokedex");
const { PokemonDetails } = lazyImport(
  () => import("./Pokedex/PokemonDetails"),
  "PokemonDetails"
);

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Suspense fallback={<>loading...</>}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Pokedex />} path="/" />
            <Route element={<PokemonDetails />} path="/details/:name" />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </Suspense>
  );
};
