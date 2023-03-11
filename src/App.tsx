import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { BrowserRouter } from 'react-router-dom';

import { Navigation } from './common/components/navigation/Navigation';
import { AuthContextProvider } from './context/AuthContext';

import { PaginationContextProvider } from './context/PaginationContext';
import { PokemonsContextProvider } from './context/PokemonsContext';
import { theme } from './common/styles/styles';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <PokemonsContextProvider>
            <PaginationContextProvider>
              <BrowserRouter>
                <Navigation />
              </BrowserRouter>
              <ReactQueryDevtools />
            </PaginationContextProvider>
          </PokemonsContextProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
