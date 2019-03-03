import moment from 'moment';
import React from 'react';
import { Calendar, generateDatesRangeAtScaleLevel } from './Calendar';
import { mount } from 'enzyme'
import { CalendarScaleLevels } from './calendar-scale-levels.enum';

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
        it('should have 1 ms at 0.001', () => {
            const result = generateDatesRangeAtScaleLevel(CalendarScaleLevels.MILLISECONDS.ordinal + .001, 1000, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(1);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'milliseconds') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 999 ms at 0.999', () => {
            const result = generateDatesRangeAtScaleLevel(CalendarScaleLevels.MILLISECONDS.ordinal + .999, 1000, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(999);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'milliseconds') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 23 hours at 3.95', () => {
            const result = generateDatesRangeAtScaleLevel(CalendarScaleLevels.HOURS.ordinal + .95, 24, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(23);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'hours') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 10 years at 12', () => {
            const result = generateDatesRangeAtScaleLevel(CalendarScaleLevels.DECADES.ordinal, 1, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(10);
            expect(result.every((r, i) => {
                let isOk = !!r;
                if (i > 0) {
                    isOk = r.diff(result[i - 1], 'years') === 1;
                }
                return isOk;
            })).toBeTruthy();
        });

        it('should have 17 years at 12.7', () => {
            const result = generateDatesRangeAtScaleLevel(CalendarScaleLevels.DECADES.ordinal + .7, 1, moment('2019-03-01T00:00:00.000Z'));
            expect(result.length).toEqual(17);
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

