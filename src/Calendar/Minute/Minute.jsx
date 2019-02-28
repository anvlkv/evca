import React, { Component } from 'react';
import './Minute.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Minute extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.MINUTES.ordinal:
                return (
                    <Layout key={'minute'} fitX={100} fitY={100} direction={'z'}>

                    </Layout>
                );
            case CalendarZoomLevels.HOURS.ordinal:
                return (
                    <Layout key={'hours-minute'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Minute'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}