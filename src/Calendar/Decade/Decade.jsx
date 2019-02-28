import React, { Component } from 'react';
import './Decade.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Decade extends Component {
    renderAtZoomLevel(zoom) {
        return (
            <Layout key={'decade'} direction={'x'} fitX={100} fitY={100}>

            </Layout>
        )
    }

    render() {
        return (
            <g className={'Decade'}>
                <ZoomLevelContext.Consumer>
                    {(({zoom}) => {
                        return this.renderAtZoomLevel(zoom)
                    })}
                </ZoomLevelContext.Consumer>
            </g>
        )
    }
}