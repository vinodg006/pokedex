import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useFormikContext } from 'formik';

import { BaseForm } from '../../../common/components/baseForm/BaseForm';
import { IBirthDateValues, monthList } from '../utils';

export const BirthDateForm = () => {
  const { submitForm, values, handleChange, errors } =
    useFormikContext<IBirthDateValues>();

  const { day: dayValidationError, year: yearValidationError } = errors;

  const generateOptions = () => {
    return monthList.map((month) => (
      <option
        key={month.label}
        value={month.value}
        label={month.label}
      ></option>
    ));
  };

  return (
    <BaseForm onSubmit={submitForm}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <FormControl isRequired>
          <FormLabel>MONTH</FormLabel>
          <Select
            variant="withShadow"
            id="month"
            name="month"
            value={values.month}
            onChange={handleChange}
          >
            {generateOptions()}
          </Select>
        </FormControl>

        <FormControl isRequired isInvalid={!!dayValidationError}>
          <FormLabel>DAY</FormLabel>
          <Input
            variant="withShadow"
            id="day"
            name="day"
            value={values.day}
            onChange={handleChange}
          />
          <FormErrorMessage>{dayValidationError}</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={!!yearValidationError}>
          <FormLabel>YEAR</FormLabel>
          <Input
            variant="withShadow"
            id="year"
            name="year"
            value={values.year}
            onChange={handleChange}
          ></Input>
          <FormErrorMessage>{yearValidationError}</FormErrorMessage>
        </FormControl>
      </div>
    </BaseForm>
  );
};
