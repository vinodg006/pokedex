import { createContext, ReactNode, useMemo, useState } from 'react';

interface PaginationContextState {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationContext = createContext({} as PaginationContextState);

interface PaginationConsumerProps {
  children: ReactNode;
}

const PaginationContextProvider = ({ children }: PaginationConsumerProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const value = useMemo(
    () => ({
      currentPage,
      setCurrentPage,
    }),
    [currentPage, setCurrentPage]
  );

  return (
    <PaginationContext.Provider value={value}>
      {children}
    </PaginationContext.Provider>
  );
};

export { PaginationContext, PaginationContextProvider };
