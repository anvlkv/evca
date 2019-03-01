import React, { Component } from 'react';
import './Day.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { generateDatesRangeAtZoomLevel, ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';
import { Hour } from '../Hour/Hour';

export class Day extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.DAY.ordinal:
                return (
                    <Layout key={'day'} fitX={100} fitY={100} direction={'y'}>
                        <g className={'day-header'}>
                            <rect className={'background'} width={100} height={20}/>
                            <text className={'primary-date'}>{this.props.startDate.format('dddd, MMMM Do')}</text>
                            <text className={'secondary-date'}>{this.props.startDate.format('YYYY')}</text>
                        </g>
                        {generateDatesRangeAtZoomLevel(zoom, 24, this.props.startDate).map((rangeDate, index) => {
                            return (
                                <Hour key={`day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.DAYS.ordinal:
                return (
                    <Layout key={'days-day'} fitX={100} fitY={100} direction={'y'}>
                        {generateDatesRangeAtZoomLevel(zoom, 24, this.props.startDate).map((rangeDate, index) => {
                            return (
                                <Hour key={`days-day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.WEEKS.ordinal:
                return (
                    <Layout key={'weeks-day'} fitX={100} fitY={100} direction={'y'}>
                        {generateDatesRangeAtZoomLevel(zoom, 24, this.props.startDate).map((rangeDate, index) => {
                            return (
                                <Hour key={`weeks-day-hours-${index + 1}`} startDate={rangeDate}/>
                            );
                        })}
                    </Layout>
                );
            case CalendarZoomLevels.MONTH.ordinal:
                return (
                    <Layout key={'month-day'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            case CalendarZoomLevels.QUARTERS.ordinal:
            case CalendarZoomLevels.MONTHS.ordinal:
            case CalendarZoomLevels.YEAR.ordinal:
                return (
                    <Layout key={'months-day'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Day'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}