import React, { Component } from 'react';
import './Week.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Week extends Component {
    renderAtZoomLevel(zoom) {
        switch (zoom) {
            case CalendarZoomLevels.WEEKS.ordinal:
                return (
                    <Layout key={'week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.MONTH.ordinal:
                return (
                    <Layout key={'month-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.QUARTERS.ordinal:
                return (
                    <Layout key={'quarters-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.MONTHS.ordinal:
                return (
                    <Layout key={'months-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Week'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}