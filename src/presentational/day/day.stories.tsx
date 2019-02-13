import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Day } from './day';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';
import moment from 'moment';

storiesOf('DAY', module)
	.add('with "date" date', () => (
		<svg viewBox={`0 0 100 100`}
		     width={200}
		     height={200}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Day startDate={moment()} zoomLevel={CalendarZoomLevels.MONTH}/>
		</svg>
	));