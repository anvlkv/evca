import React from 'react';
import { ZoomLevelContext } from '../Calendar';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { Hour } from './Hour';
import { mount } from 'enzyme'

describe('Hour', () => {
    let props;
    let mountedComponent;
    let zoom = CalendarZoomLevels.HOURS.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ZoomLevelContext.Provider value={{zoom}}>
                    <svg>
                      <Hour {...props} />
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

