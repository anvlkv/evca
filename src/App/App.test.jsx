import React from 'react';
import App from './App';
import { mount } from 'enzyme'

describe('App', () => {
  let props;
  let mountedComponent;
  const component = () => {
      if (!mountedComponent) {
          mountedComponent = mount(
              <App {...props} />
          );
      }
      return mountedComponent;
  };

  beforeEach(() => {
      props = {};
      mountedComponent = undefined;
  });

  it('renders without crashing', () => {
    expect(component()).toBeTruthy();
  });

  it('renders svg element', () => {
    const svg = component().find('svg');
    expect(svg.length).toEqual(1);
  });
});

