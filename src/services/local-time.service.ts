import { from, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Moment } from 'moment';
import moment from 'moment';


export class LocalTimeService {
	public time: Observable<Moment>;

	private timeTick = 30;

	constructor(
		startDate = moment()
	) {
		this.time = from(interval(this.timeTick)).pipe(
			map(_ => startDate.add(this.timeTick, 'ms'))
		);
	}
}

export const localTimeService = new LocalTimeService();



