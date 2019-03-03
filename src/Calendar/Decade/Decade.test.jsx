import React from 'react';
import { ScaleLevelContext } from '../Calendar';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { Decade } from './Decade';
import { mount } from 'enzyme'

describe('Decade', () => {
    let props;
    let mountedComponent;
    let scale = CalendarScaleLevels.DECADES.ordinal;
    const component = () => {
        if (!mountedComponent) {
            mountedComponent = mount(
                <ScaleLevelContext.Provider value={{scale}}>
                    <svg>
                      <Decade {...props} />
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

