import { Enum } from 'enumify';

class CalendarZoomLevelsEnum extends Enum {}

CalendarZoomLevelsEnum.initEnum([
    'MILLISECONDS',
    'SECONDS',
    'MINUTES',
    'HOURS',
    'DAY',
    'DAYS',
    'WEEKS',
    'MONTH',
    'QUARTERS',
    'MONTHS',
    'YEAR',
    'YEARS',
    'DECADES'
]);

export const CalendarZoomLevels = CalendarZoomLevelsEnum;