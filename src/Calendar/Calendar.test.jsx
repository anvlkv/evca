import React from 'react';
import Calendar from './Calendar';
import { mount } from 'enzyme'

describe('Calendar', () => {
    let props;
    let mountedComponent;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <svg>
                  <Calendar {...props} />
                </svg>
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

    it('renders g element', () => {
        const g = component().find('g');
        expect(g.length).toBeGreaterThan(0);
    });
});

