import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Week } from './week';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';
import { WeekDays } from './week-days.enum';
import moment from 'moment';

storiesOf('WEEK', module)
	.add('weekdays starting MONDAY', () => (
		<svg viewBox={`0 0 100 100`}
		     width={640}
		     height={480}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			{Week.renderWeekDaysNames('dd', 0)}
		</svg>
	))
	.add('weekdays starting WEDNESDAY', () => (
		<svg viewBox={`0 0 100 100`}
		     width={640}
		     height={480}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			{Week.renderWeekDaysNames('dd', WeekDays.WEDNESDAY)}
		</svg>
	))
	.add('with "startDate" date', () => (
		<svg viewBox={`0 0 100 100`}
		     width={640}
		     height={480}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Week startDate={moment()} zoomLevel={CalendarZoomLevels.MONTH}/>
		</svg>
	));