import React from 'react';
import { ZoomLevelContext } from '../Calendar';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { Decade } from './Decade';
import { mount } from 'enzyme'

describe('Decade', () => {
    let props;
    let mountedComponent;
    let zoom = CalendarZoomLevels.DECADES.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ZoomLevelContext.Provider value={{zoom}}>
                    <svg>
                      <Decade {...props} />
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

