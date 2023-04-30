import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { AuthContext } from '../../../context/AuthContext';
import { BIRTH_DATE_PATH, USER_NAME_PATH } from './PathNames';

interface IProtectedRoute {
  children: JSX.Element;
  type: 'birthDate' | 'pokemons';
}

export const ProtectedRoute = ({ children, type }: IProtectedRoute) => {
  const { userName, birthDate } = useContext(AuthContext);

  if (type === 'birthDate') {
    return userName ? (
      children
    ) : (
      <Navigate to={{ pathname: USER_NAME_PATH }} replace />
    );
  }

  if (type === 'pokemons') {
    if (!userName) <Navigate to={{ pathname: USER_NAME_PATH }} replace />;
    if (!birthDate) {
      return <Navigate to={{ pathname: BIRTH_DATE_PATH }} replace />;
    }
    return children;
  }

  return <Navigate to={{ pathname: USER_NAME_PATH }} replace />;
};
