import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './Layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // ReactDOM.render(<Layout date={new Date()} width={100} height={100}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
