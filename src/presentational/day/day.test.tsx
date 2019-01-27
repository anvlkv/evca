import React from 'react';
import ReactDOM from 'react-dom';
import { Day } from './day';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Day date={new Date()}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
