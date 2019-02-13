import React from 'react';
import ReactDOM from 'react-dom';
import { Month } from './month';
import { CalendarZoomLevels } from '../../containers/calendar/calendar-zoom-states.enum';
import moment from 'moment';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 123">
		<Month startDate={moment()} zoomLevel={CalendarZoomLevels.MONTH}/>
	</svg>, div);
	ReactDOM.unmountComponentAtNode(div);
});