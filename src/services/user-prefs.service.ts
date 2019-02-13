import { WeekDays } from '../presentational/week/week-days.enum';


export class UserPrefsService {
	public startOfTheWeek = WeekDays.SUNDAY;
}

export const userPrefsService = new UserPrefsService();