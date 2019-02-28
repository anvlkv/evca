import React, { Component } from 'react';
import './Millisecond.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Millisecond extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.MILLISECONDS.ordinal:
                return (
                    <Layout key={'millisecond'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarZoomLevels.SECONDS.ordinal:
                return (
                    <Layout key={'seconds-millisecond'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Millisecond'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}