import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Month } from './month';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';
import moment from 'moment';

storiesOf('MONTH', module)
	.add('with "startDate" date', () => (
		<svg viewBox={`0 0 100 100`}
		     width={640}
		     height={480}
		     xmlns="http://www.w3.org/2000/svg"
		     preserveAspectRatio="xMidYMin slice"
		     fontSize={1.6}>
			<Month startDate={moment()} zoomLevel={CalendarZoomLevels.MONTH}/>
		</svg>
	));