import { Formik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { BIRTH_DATE_PATH } from '../../../common/components/navigation/PathNames';
import { AuthContext } from '../../../context/AuthContext';
import { UserNameForm } from './UserNameForm';
import { userNameValidationSchema } from './validationSchema';

export interface IUserNameValues {
  name: string
  surname: string
}

export const UserNameFormWrapper = () => {
  const { submitUserName } = useContext(AuthContext);
  const navigate = useNavigate();
  const initialValues: IUserNameValues = {
    name: '',
    surname: '',
  };

  const handleSubmit = (values: IUserNameValues) => {
    const formattedUserName = `${values.name} ${values.surname}`;
    submitUserName(formattedUserName);
    navigate(BIRTH_DATE_PATH);
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={userNameValidationSchema}
      onSubmit={handleSubmit}
      component={() => <UserNameForm />}
    />
  );
};
