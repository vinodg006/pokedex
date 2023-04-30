import { number, object, string } from 'yup';

import { getMaxDaysByMonthAndYear } from '../utils';

export const birthDateValidationSchema = () =>
  object().shape({
    year: number()
      .required('Year is required')
      .min(1900, 'Please enter a valid year')
      .max(2023, 'Please enter a valid year'),
    month: string().required('Month is required'),
    day: number()
      .required('Day is required')
      .when(['month', 'year'], (m_y) => {
        return number().max(
          getMaxDaysByMonthAndYear(m_y[0], m_y[1]),
          `Selected month has ${getMaxDaysByMonthAndYear(m_y[0], m_y[1])} day(s)`
        )
      })
      .min(1, 'Please enter a valid day'),
  })
