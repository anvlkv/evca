import { Component } from 'react';
import { CalendarZoomLevels } from '../calendar/calendar-zoom-states.enum';
import { UserPrefsService, userPrefsService } from '../../services/user-prefs.service';
import { LocalTimeService, localTimeService } from '../../services/local-time.service';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Moment } from 'moment';
import { Subscription } from 'rxjs';

export interface TimeSpanPropsBase {
	// now: Date | [Date, Date];
	startDate: Moment;
	zoomLevel: CalendarZoomLevels
	isDisabled?: boolean;
}

export interface TimeSpanStateBase {
	isNow: boolean;
}

export abstract class TimeSpanComponentBase<P extends TimeSpanPropsBase = TimeSpanPropsBase, S extends TimeSpanStateBase = TimeSpanStateBase> extends Component<P, S> {
	abstract ownZoomLevelCorrespondence: CalendarZoomLevels;
	protected userPrefs: UserPrefsService;
	protected localTimeService: LocalTimeService;
	private localTimeSubscription: Subscription | undefined;

	constructor(props: P) {
		super(props);
		this.userPrefs = userPrefsService;
		this.localTimeService = localTimeService;
	}

	componentDidMount() {
		this.localTimeSubscription = this.localTimeService.time.pipe(
			map(m => this.checkIsNow(m)),
			distinctUntilChanged()
		).subscribe(isNow => this.setState({isNow}));
	}

	componentWillUnmount() {
		this.localTimeSubscription ? this.localTimeSubscription.unsubscribe() : null;
	}

	public checkIsNow(moment: Moment): boolean {
		switch (this.props.zoomLevel) {
			case CalendarZoomLevels.MILLISECONDS:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'ms'));
			case CalendarZoomLevels.SECONDS:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 's'));
			case CalendarZoomLevels.MINUTES:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'm'));
			case CalendarZoomLevels.HOURS:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'h'));
			case CalendarZoomLevels.DAY:
			case CalendarZoomLevels.DAYS:
			case CalendarZoomLevels.WEEKS:
			case CalendarZoomLevels.MONTH:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'd'));
			case CalendarZoomLevels.QUARTERS:
			case CalendarZoomLevels.MONTHS:
			case CalendarZoomLevels.YEAR:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'M'));
			case CalendarZoomLevels.YEARS:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(1, 'y'));
			case CalendarZoomLevels.DECADES:
				return moment.isBetween(this.props.startDate, this.props.startDate.clone().add(10, 'y'));
			default:
				throw new Error(`Not a valid calendar zoom level [${this.props.zoomLevel}]`);
		}
	}

}