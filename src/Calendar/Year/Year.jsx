import React, { Component } from 'react';
import './Year.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Year extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.YEAR.ordinal:
                return (
                    <Layout key={'year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            case CalendarZoomLevels.YEARS.ordinal:
                return (
                    <Layout key={'years-year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            case CalendarZoomLevels.DECADES.ordinal:
                return (
                    <Layout key={'decades-year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Year'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}