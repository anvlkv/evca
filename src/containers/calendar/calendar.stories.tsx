import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Calendar } from './calendar';
import { CalendarZoomLevels } from './calendar-zoom-states.enum';
import moment from 'moment';


storiesOf('Calendar', module)
	.add('with "now" date', () => (
		<Calendar width={200}
		          height={200}
		          zoomLevel={CalendarZoomLevels.MONTH}
		          startDate={moment('Thu Jan 31 2017 20:10:52 GMT+0100 (Central European Standard Time)')}/>
	));