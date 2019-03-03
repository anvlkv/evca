import React, { Component } from 'react';
import './Day.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { generateDatesRange, ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';
import { Hour } from '../Hour/Hour';

export class Day extends Component {
    renderAtScaleLevel(scale) {
        const endDate = this.props.startDate.clone().add(24, 'hours');
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.DAY.ordinal:
                return (
                    <Layout key={'day'} fitX={100} fitY={100} direction={'y'}>
                        <g className={'day-header'}>
                            <rect className={'background'} width={100} height={20}/>
                            <text className={'primary-date'}>{this.props.startDate.format('dddd, MMMM Do')}</text>
                            <text className={'secondary-date'}>{this.props.startDate.format('YYYY')}</text>
                        </g>
                        {generateDatesRange(this.props.startDate, endDate, 'hours').map((rangeDate, index) => {
                            return (
                                <Hour key={`day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.DAYS.ordinal:
                return (
                    <Layout key={'days-day'} fitX={100} fitY={100} direction={'y'}>
                        {generateDatesRange(this.props.startDate, endDate, 'hours').map((rangeDate, index) => {
                            return (
                                <Hour key={`days-day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.WEEKS.ordinal:
                return (
                    <Layout key={'weeks-day'} fitX={100} fitY={100} direction={'y'}>
                        {generateDatesRange(this.props.startDate, endDate, 'hours').map((rangeDate, index) => {
                            return (
                                <Hour key={`weeks-day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarScaleLevels.MONTH.ordinal:
                return (
                    <Layout key={'month-day'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            case CalendarScaleLevels.QUARTERS.ordinal:
            case CalendarScaleLevels.MONTHS.ordinal:
            case CalendarScaleLevels.YEAR.ordinal:
                return (
                    <Layout key={'months-day'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Day'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}