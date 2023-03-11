import { createContext, ReactNode, useMemo, useState } from 'react';

import { IPokemons } from '../gateway/pokemonsApi';

interface PokemonsContextState {
  pokemons: IPokemons | undefined;
  setPokemons: React.Dispatch<React.SetStateAction<IPokemons | undefined>>;
  totalPokemonsCnt: number;
  setTotalPokemonsCnt: React.Dispatch<React.SetStateAction<number>>;
}

const PokemonsContext = createContext({} as PokemonsContextState);

interface PokemonsConsumerProps {
  children: ReactNode;
}

const PokemonsContextProvider = ({ children }: PokemonsConsumerProps) => {
  const [pokemons, setPokemons] = useState<IPokemons | undefined>();
  const [totalPokemonsCnt, setTotalPokemonsCnt] = useState<number>(0);

  const value = useMemo(
    () => ({
      pokemons,
      setPokemons,
      totalPokemonsCnt,
      setTotalPokemonsCnt,
    }),
    [pokemons, setPokemons, totalPokemonsCnt, setTotalPokemonsCnt]
  );

  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};

export { PokemonsContext, PokemonsContextProvider };
