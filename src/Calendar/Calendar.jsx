import moment from 'moment';
import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import { CalendarScaleLevels } from './calendar-scale-levels.enum';
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


export const ScaleLevelContext = React.createContext({scale: null});


export class Calendar extends Component {

    static getDerivedStateFromProps(props, state) {
        let shouldUpdateState = false;

        if (props.startDate && props.startDate !== state.startDate) {
            state.startDate = props.startDate;
            shouldUpdateState = true;
        }

        if (props.scale && props.scale !== state.scale) {
            state.scale = props.scale;
            shouldUpdateState = true;
        }

        return shouldUpdateState ? state : null;
    }

    constructor(props) {
        super(props);
        this.state = {
            startDate: this.props.startDate || moment(),
            scale: this.props.scale || CalendarScaleLevels.DAY.ordinal
        };
    }


    renderAtScaleLevel(scale = this.state.scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.MILLISECONDS.ordinal:
                return (
                    <Layout key={'calendar-milliseconds'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 999, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Millisecond key={`calendar-millisecond-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.SECONDS.ordinal:
                return (
                    <Layout key={'calendar-seconds'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 59, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Second key={`calendar-second-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.MINUTES.ordinal:
                return (
                    <Layout key={'calendar-minutes'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 59, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Minute key={`calendar-minute-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.HOURS.ordinal:
                return (
                    <Layout key={'calendar-hours'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 23, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Hour key={`calendar-hour-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.DAY.ordinal:
                return (
                    <Day key={'calendar-day'} startDate={this.state.startDate}/>
                );
            case CalendarScaleLevels.DAYS.ordinal:
                return (
                    <Layout key={'calendar-days'} direction={'x'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 6, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Day key={`calendar-day-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.WEEKS.ordinal:
                return (
                    <Layout key={'calendar-weeks'} direction={'x'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 4, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Week key={`calendar-week-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.MONTH.ordinal:
                return (
                    <Month key={'calendar-month'} startDate={this.state.startDate}/>
                );
            case CalendarScaleLevels.QUARTERS.ordinal:
                return (
                    <Layout key={'calendar-quarters'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 3, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Quarter key={`calendar-quarter-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.MONTHS.ordinal:
                return (
                    <Layout key={'calendar-months'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 11, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Month key={`calendar-month-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.YEAR.ordinal:
                return (
                    <Year key={'calendar-year'} startDate={this.state.startDate}/>
                );
            case CalendarScaleLevels.YEARS.ordinal:
                return (
                    <Layout key={'calendar-years'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 9, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Year key={`calendar-year-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.DECADES.ordinal:
                return (
                    <Layout key={'calendar-decades'} direction={'y'} fitX={100} fitY={100}>
                        {generateDatesRangeAtScaleLevel(this.state.scale, 100, this.state.startDate).map((rangeDate, index) => {
                            return (
                                <Decade key={`calendar-decade-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            default:
                throw new Error(`Not a valid calendar scale level [${scale}]`);
        }
    }

    render() {
        return (
            <g className={'Calendar'}>
                <ScaleLevelContext.Provider value={{scale: this.state.scale}}>
                    {this.renderAtScaleLevel(this.state.scale)}
                </ScaleLevelContext.Provider>
            </g>
        );
    }
}


export function generateDatesRangeAtScaleLevel(scale, rangeLimit, startMoment) {
    let scaleDecimalPart = scale % 1;
    let incrementUnit;
    let multiplicand = 1;
    switch (Math.floor(scale)) {
        case CalendarScaleLevels.MILLISECONDS.ordinal:
            incrementUnit = 'milliseconds';
            break;
        case CalendarScaleLevels.SECONDS.ordinal:
            incrementUnit = 'seconds';
            break;
        case CalendarScaleLevels.MINUTES.ordinal:
            incrementUnit = 'minutes';
            break;
        case CalendarScaleLevels.DAY.ordinal:
            multiplicand = 24;
        case CalendarScaleLevels.HOURS.ordinal:
            incrementUnit = 'hours';
            break;
        case CalendarScaleLevels.DAYS.ordinal:
            incrementUnit = 'days';
            break;
        case CalendarScaleLevels.WEEKS.ordinal:
            incrementUnit = 'weeks';
            break;
        case CalendarScaleLevels.QUARTERS.ordinal:
            incrementUnit = 'quarters';
            break;
        case CalendarScaleLevels.MONTH.ordinal:
        case CalendarScaleLevels.MONTHS.ordinal:
            incrementUnit = 'months';
            break;
        case CalendarScaleLevels.DECADES.ordinal:
            multiplicand = 10;
        case CalendarScaleLevels.YEAR.ordinal:
        case CalendarScaleLevels.YEARS.ordinal:
            incrementUnit = 'years';
            break;
        default:
            throw new Error(`unsupported scale [${scale}] increment`);
    }


    const endMoment = startMoment.clone().add(scaleDecimalPart ?
        (rangeLimit * (multiplicand > 1 ? scaleDecimalPart + 1 : scaleDecimalPart)) * multiplicand :
        1 * multiplicand,
        incrementUnit);

    return generateDatesRange(startMoment, endMoment, incrementUnit);
}

export function generateDatesRange(startMoment, endMoment, unit) {
    const range = [];
    while (endMoment.isAfter(range[range.length - 1] || startMoment)) {
        const previousMoment = range[range.length - 1] || startMoment;
        range.push(previousMoment.clone().add(1, unit));
    }
    return range;
}