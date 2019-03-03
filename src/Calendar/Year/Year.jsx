import React, { Component } from 'react';
import './Year.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Year extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.YEAR.ordinal:
                return (
                    <Layout key={'year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            case CalendarScaleLevels.YEARS.ordinal:
                return (
                    <Layout key={'years-year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            case CalendarScaleLevels.DECADES.ordinal:
                return (
                    <Layout key={'decades-year'} fitX={100} fitY={100} direction={'x'}>

                    </Layout>
                );
            default:
                throw new Error(`unsupported scale level [${scale}] for [${this.constructor.name}]`);
        }
    }

    render() {
        return (
            <g className={'Year'}>
                <ScaleLevelContext.Consumer>
                    {(({scale}) => {
                        return this.renderAtScaleLevel(scale)
                    })}
                </ScaleLevelContext.Consumer>
            </g>
        )
    }
}