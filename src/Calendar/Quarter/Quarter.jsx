import React, { Component } from 'react';
import './Quarter.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Quarter extends Component {
    renderAtZoomLevel(zoom) {
        return (
            <Layout key={'quarter'} direction={'x'} fitX={100} fitY={100}>

            </Layout>
        )
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