import React from 'react';
import { ScaleLevelContext } from '../Calendar';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { Month } from './Month';
import { mount } from 'enzyme'

describe('Month', () => {
    let props;
    let mountedComponent;
    let scale = CalendarScaleLevels.MONTH.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ScaleLevelContext.Provider value={{scale}}>
                    <svg>
                      <Month {...props} />
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

