import React from 'react';
import App from './App';
import {shallow, mount} from 'enzyme'

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App/>)
  });

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>);
  });

  it('should have svg element', () => {
    const svg = wrapper.find('svg');
    expect(svg.length).toEqual(1);
  });
});

