import { Enum } from 'enumify';

class CalendarScaleLevelsEnum extends Enum {}

CalendarScaleLevelsEnum.initEnum([
    'MILLISECONDS', // 0
    'SECONDS', // 1
    'MINUTES', // 2
    'HOURS', // 3
    'DAY', // 4
    'DAYS', // 5
    'WEEKS', // 6
    'MONTH', // 7
    'QUARTERS', // 8
    'MONTHS', // 9
    'YEAR', // 10
    'YEARS', // 11
    'DECADES' // 12
]);

export const CalendarScaleLevels = CalendarScaleLevelsEnum;