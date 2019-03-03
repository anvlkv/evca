import React from 'react';
import { ScaleLevelContext } from '../Calendar';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { Year } from './Year';
import { mount } from 'enzyme'

describe('Year', () => {
    let props;
    let mountedComponent;
    let scale = CalendarScaleLevels.YEAR.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ScaleLevelContext.Provider value={{scale}}>
                    <svg>
                      <Year {...props} />
                    </svg>
                </ScaleLevelContext.Provider>
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

