import React, { Component } from 'react';
import './Millisecond.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Millisecond extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.MILLISECONDS.ordinal:
                return (
                    <Layout key={'millisecond'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarScaleLevels.SECONDS.ordinal:
                return (
                    <Layout key={'seconds-millisecond'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Millisecond'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}