import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import { BaseForm } from '../../../common/components/baseForm/BaseForm';
import { IUserNameValues } from './UserNameFormWrapper';

export const UserNameForm = () => {
  const { submitForm, values, handleChange, errors } =
    useFormikContext<IUserNameValues>();

  const { name: nameValidationError, surname: surnameValidationError } = errors;

  return (
    <BaseForm onSubmit={submitForm} >
      <div style={{ display: 'flex', gap: '20px' }}>
        <FormControl isRequired isInvalid={!!nameValidationError}>
          <FormLabel>First Name</FormLabel>
          <Input
            variant="withShadow"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <FormErrorMessage>{nameValidationError}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!surnameValidationError}>
          <FormLabel>Last Name</FormLabel>
          <Input
            variant="withShadow"
            id="surname"
            name="surname"
            value={values.surname}
            onChange={handleChange}
          ></Input>
          <FormErrorMessage>{surnameValidationError}</FormErrorMessage>
        </FormControl>
      </div>
    </BaseForm>
  );
};
