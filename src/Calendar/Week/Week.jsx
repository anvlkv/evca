import React, { Component } from 'react';
import './Week.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Week extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.WEEKS.ordinal:
                return (
                    <Layout key={'week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarScaleLevels.MONTH.ordinal:
                return (
                    <Layout key={'month-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarScaleLevels.QUARTERS.ordinal:
                return (
                    <Layout key={'quarters-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            case CalendarScaleLevels.MONTHS.ordinal:
                return (
                    <Layout key={'months-week'} fitX={100} fitY={100} direction={'y'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
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