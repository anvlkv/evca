import React, { Component } from 'react';
import './Second.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Second extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.SECONDS.ordinal:
                return (
                    <Layout key={'second'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.MINUTES.ordinal:
                return (
                    <Layout key={'minutes-second'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Second'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}