import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from './calendar';
import { CalendarZoomLevels } from './calendar-zoom-states.enum';
import moment from 'moment';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar width={100}
                                    height={100}
                                    zoomLevel={CalendarZoomLevels.MONTH}
                                    startDate={moment('2016-01-01T23:35:01')}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
