import React from 'react';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { Second } from './Second';
import { mount } from 'enzyme'
import { ZoomLevelContext } from '../Calendar';

describe('Second', () => {
    let props;
    let mountedComponent;
    let zoom = CalendarZoomLevels.SECONDS.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ZoomLevelContext.Provider value={{zoom}}>
                    <svg>
                      <Second {...props} />
                    </svg>
                </ZoomLevelContext.Provider>
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

