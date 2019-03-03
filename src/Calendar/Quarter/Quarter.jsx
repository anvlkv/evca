import React, { Component } from 'react';
import './Quarter.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Quarter extends Component {
    renderAtScaleLevel(scale) {
        return (
            <Layout key={'quarter'} direction={'x'} fitX={100} fitY={100}>

            </Layout>
        )
    }

    render() {
        return (
            <g className={'Week'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}