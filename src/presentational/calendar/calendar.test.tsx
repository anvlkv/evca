import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar } from './calendar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calendar date={new Date()} width={100} height={100}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
