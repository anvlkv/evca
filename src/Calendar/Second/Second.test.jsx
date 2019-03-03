import React from 'react';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { Second } from './Second';
import { mount } from 'enzyme'
import { ScaleLevelContext } from '../Calendar';

describe('Second', () => {
    let props;
    let mountedComponent;
    let scale = CalendarScaleLevels.SECONDS.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ScaleLevelContext.Provider value={{scale}}>
                    <svg>
                      <Second {...props} />
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

