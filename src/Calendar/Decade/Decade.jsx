import React, { Component } from 'react';
import './Decade.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Decade extends Component {
    renderAtScaleLevel(scale) {
        return (
            <Layout key={'decade'} direction={'x'} fitX={100} fitY={100}>

            </Layout>
        )
    }

    render() {
        return (
            <g className={'Decade'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}