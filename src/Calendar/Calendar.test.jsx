import moment from 'moment';
import React from 'react';
import { Calendar, generateDatesRangeAtZoomLevel } from './Calendar';
import { mount } from 'enzyme'
import { CalendarZoomLevels } from './calendar-zoom-levels.enum';

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
    
    describe('date range generator', () => {
        it('should have 24 hrs in 1 day', () => {
            const result = generateDatesRangeAtZoomLevel(CalendarZoomLevels.HOURS.ordinal, 24, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(24);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'hours') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 12 hrs in .5 day', () => {
            const result = generateDatesRangeAtZoomLevel(CalendarZoomLevels.HOURS.ordinal + .5, 24, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(12);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'hours') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 10 years in 1 decade', () => {
            const result = generateDatesRangeAtZoomLevel(CalendarZoomLevels.DECADES.ordinal, 1, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(10);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'years') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 7 years in 1.7 decades', () => {
            const result = generateDatesRangeAtZoomLevel(CalendarZoomLevels.DECADES.ordinal + .3, 1, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(7);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'years') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });
    })
});

