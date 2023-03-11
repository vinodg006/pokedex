import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';

interface AuthContextState {
  userName: string;
  birthDate: string;
  submitUserName: (userName: string) => void;
  submitBirthDate: (birthDate: string) => void;
}

const AuthContext = createContext({} as AuthContextState);

interface AuthConsumerProps {
  children: ReactNode;
}

const LS_USERNAME_KEY = 'userName';
const LS_BIRTH_DATE_KEY = 'birthDate';

const AuthContextProvider = ({ children }: AuthConsumerProps) => {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem(LS_USERNAME_KEY) || ''
  );
  const [birthDate, setBirthDate] = useState<string>(
    localStorage.getItem(LS_BIRTH_DATE_KEY) || ''
  );

  const submitUserName = useCallback((userName: string): void => {
    localStorage.setItem(LS_USERNAME_KEY, userName);
    setUserName(userName);
  }, []);

  const submitBirthDate = useCallback((birthDate: string): void => {
    localStorage.setItem(LS_BIRTH_DATE_KEY, birthDate);
    setBirthDate(birthDate);
  }, []);

  const value = useMemo(
    () => ({
      userName,
      birthDate,
      submitUserName,
      submitBirthDate,
    }),
    [userName, birthDate, submitUserName, submitBirthDate]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
