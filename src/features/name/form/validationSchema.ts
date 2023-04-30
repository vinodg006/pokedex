import { object, string } from 'yup';

export const userNameValidationSchema = () =>
  object().shape({
    name: string().required('Name is required'),
    surname: string().required('Surname is required'),
  })
