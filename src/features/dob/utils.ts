type MonthType =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

interface IMonthOption {
  label: MonthType
  value: string
  daysCounter: number
  isAffectedByLeapYear?: boolean
}

export const monthList: IMonthOption[] = [
  { label: 'January', value: '01', daysCounter: 31 },
  {
    label: 'February',
    value: '02',
    daysCounter: 28,
    isAffectedByLeapYear: true
  },
  { label: 'March', value: '03', daysCounter: 30 },
  { label: 'April', value: '04', daysCounter: 31 },
  { label: 'May', value: '05', daysCounter: 30 },
  { label: 'June', value: '06', daysCounter: 31 },
  { label: 'July', value: '07', daysCounter: 30 },
  { label: 'August', value: '08', daysCounter: 31 },
  { label: 'September', value: '09', daysCounter: 30 },
  { label: 'October', value: '10', daysCounter: 31 },
  { label: 'November', value: '11', daysCounter: 30 },
  { label: 'December', value: '12', daysCounter: 31 }
]

export interface IBirthDateValues {
  month: string
  day: number
  year: number
}

export const getIsLeapYear = (year?: number): boolean =>
  year ? year % 4 === 0 : false

export const getMaxDaysByMonthAndYear = (
  monthValue: MonthType,
  year: number
): number => {
  const monthOption: IMonthOption = monthList.find(
    (monthOption) => monthOption.value === monthValue
  )!
  const isLeapYear = getIsLeapYear(year)
  return isLeapYear && monthOption.isAffectedByLeapYear
    ? monthOption.daysCounter + 1
    : monthOption.daysCounter
}

export const formatDate = (values: IBirthDateValues) =>
  `${values.day}.${values.month}.${values.year}`
