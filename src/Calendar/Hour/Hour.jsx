import React, { Component } from 'react';
import './Hour.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { generateDatesRangeAtZoomLevel, ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Hour extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.HOURS.ordinal:
                return (
                    <Layout key={'hour'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            case CalendarZoomLevels.DAY.ordinal:
                return (
                    <Layout key={'day-hour'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.DAYS.ordinal:
                return (
                    <Layout key={'days-hour'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Hour'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}