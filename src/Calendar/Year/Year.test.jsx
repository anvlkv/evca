import React from 'react';
import { ZoomLevelContext } from '../Calendar';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { Year } from './Year';
import { mount } from 'enzyme'

describe('Year', () => {
    let props;
    let mountedComponent;
    let zoom = CalendarZoomLevels.YEAR.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ZoomLevelContext.Provider value={{zoom}}>
                    <svg>
                      <Year {...props} />
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

