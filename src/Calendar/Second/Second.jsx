import React, { Component } from 'react';
import './Second.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Second extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.SECONDS.ordinal:
                return (
                    <Layout key={'second'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarScaleLevels.MINUTES.ordinal:
                return (
                    <Layout key={'minutes-second'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Second'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}