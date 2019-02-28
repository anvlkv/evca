import moment from 'moment';
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { CalendarZoomLevels } from './calendar-zoom-levels.enum';
import './Calendar.scss';
import { Day } from './Day/Day';
import { Decade } from './Decade/Decade';
import { Hour } from './Hour/Hour';
import { Millisecond } from './Millisecond/Millisecond';
import { Minute } from './Minute/Minute';
import { Month } from './Month/Month';
import { Quarter } from './Quarter/Quarter';
import { Second } from './Second/Second';
import { Week } from './Week/Week';
import { Year } from './Year/Year';


export const ZoomLevelContext = React.createContext({zoom: null});

export class Calendar extends Component {

    static getDerivedStateFromProps(props, state) {
        let shouldUpdateState = false;

        if (props.startDate && props.startDate !== state.startDate) {
            state.startDate = props.startDate;
            shouldUpdateState = true;
        }

        if (props.zoom && props.zoom !== state.zoom) {
            state.zoom = props.zoom;
            shouldUpdateState = true;
        }

        return shouldUpdateState ? state : null;
    }

    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.startDate || new Date(),
            zoom: this.props.zoom || CalendarZoomLevels.DAY.ordinal
        };
    }


    renderAtZoomLevel(zoom = this.state.zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.MILLISECONDS.ordinal:
                return (
                    <Layout key={'calendar-milliseconds'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 999, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Millisecond key={`calendar-millisecond-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.SECONDS.ordinal:
                return (
                    <Layout key={'calendar-seconds'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 59, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Second key={`calendar-second-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.MINUTES.ordinal:
                return (
                    <Layout key={'calendar-minutes'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 59, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Minute key={`calendar-minute-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.HOURS.ordinal:
                return (
                    <Layout key={'calendar-hours'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 23, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Hour key={`calendar-hour-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.DAY.ordinal:
                return (
                    <Day key={'calendar-day'} startDate={this.state.startDate}/>
                );
            case CalendarZoomLevels.DAYS.ordinal:
                return (
                    <Layout key={'calendar-days'} direction={'x'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 6, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Day key={`calendar-day-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.WEEKS.ordinal:
                return (
                    <Layout key={'calendar-weeks'} direction={'x'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 4, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Week key={`calendar-week-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.MONTH.ordinal:
                return (
                    <Month key={'calendar-month'} startDate={this.state.startDate}/>
                );
            case CalendarZoomLevels.QUARTERS.ordinal:
                return (
                    <Layout key={'calendar-quarters'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 3, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Quarter key={`calendar-quarter-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.MONTHS.ordinal:
                return (
                    <Layout key={'calendar-months'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 11, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Month key={`calendar-month-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.YEAR.ordinal:
                return (
                    <Year key={'calendar-year'} startDate={this.state.startDate}/>
                );
            case CalendarZoomLevels.YEARS.ordinal:
                return (
                    <Layout key={'calendar-years'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 9, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Year key={`calendar-year-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.DECADES.ordinal:
                return (
                    <Layout key={'calendar-decades'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtZoomLevel(this.state.zoom, 100, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Decade key={`calendar-decade-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            default:
                throw new Error(`Not a valid calendar zoom level [${zoom}]`);
        }
    }

    render() {
        return (
            <g className={'Calendar'}>
                <ZoomLevelContext.Provider value={{zoom: this.state.zoom}}>
                    {this.renderAtZoomLevel(this.state.zoom)}
                </ZoomLevelContext.Provider>
            </g>
        );
    }
}


export function generateDatesRangeAtZoomLevel(zoom, rangeLimit, startDate) {
    const startMoment = moment(startDate);
    const zoomDecimalPart = zoom % 1;
    const range = [startMoment];

    const incrementer = (unit) => {
        return (date) => {
            return date.clone().add(1, unit);
        }
    };
    
    let increment;
    let by = zoomDecimalPart;

    switch (Math.floor(zoom)) {
        case CalendarZoomLevels.MILLISECONDS.ordinal:
            increment = incrementer('millisecond');
            break;
        case CalendarZoomLevels.SECONDS.ordinal:
            increment = incrementer('second');
            break;
        case CalendarZoomLevels.MINUTES.ordinal:
            increment = incrementer('minute');
            break;
        case CalendarZoomLevels.HOURS.ordinal:
            increment = incrementer('hour');
            break;
        case CalendarZoomLevels.DAY.ordinal:
        case CalendarZoomLevels.DAYS.ordinal:
            increment = incrementer('day');
            break;
        case CalendarZoomLevels.WEEKS.ordinal:
            increment = incrementer('week');
            break;
        case CalendarZoomLevels.QUARTERS.ordinal:
            increment = incrementer('month');
            by = 3 * zoomDecimalPart;
            break;
        case CalendarZoomLevels.MONTH.ordinal:
        case CalendarZoomLevels.MONTHS.ordinal:
            increment = incrementer('month');
            break;
        case CalendarZoomLevels.YEAR.ordinal:
        case CalendarZoomLevels.YEARS.ordinal:
            increment = incrementer('year');
            break;
        case CalendarZoomLevels.DECADES.ordinal:
            increment = incrementer('year');
            by = 10 * zoomDecimalPart;
            break;
        default:
            throw new Error(`unsupported zoom [${zoom}] increment`);
    }
    
    let i = 0;
    while (i < 1) {
        range.push(increment(range[range.length - 1]));
        i += 1 - by;
    }

    return range.map(m => m.toDate());
}
