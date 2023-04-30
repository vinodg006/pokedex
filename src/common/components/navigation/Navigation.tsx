import { Routes, Route } from 'react-router-dom';

import { BirthDateFormWrapper } from '../../../features/dob/form/BirthDateFormWrapper';
import { Pokemons } from '../../../features/dashboard/Pokemons';
import { UserNameFormWrapper } from '../../../features/name/form/UserNameFormWrapper';
import { BIRTH_DATE_PATH, POKEMONS_PATH, USER_NAME_PATH } from './PathNames';
import { ProtectedRoute } from './ProtectedRoute';

export const Navigation = () => {
  return (
    <Routes>
      <Route
        path={POKEMONS_PATH}
        element={
          <ProtectedRoute type="pokemons">
            <Pokemons />
          </ProtectedRoute>
        }
      />
      <Route path={USER_NAME_PATH} element={<UserNameFormWrapper />} />
      <Route
        path={BIRTH_DATE_PATH}
        element={
          <ProtectedRoute type="birthDate">
            <BirthDateFormWrapper />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
