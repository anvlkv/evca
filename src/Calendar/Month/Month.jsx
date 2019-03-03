import React, { Component } from 'react';
import './Month.scss';
import { CalendarScaleLevels } from '../calendar-scale-levels.enum';
import { ScaleLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Month extends Component {
    renderAtScaleLevel(scale) {
        switch (Math.floor(scale)) {
            case CalendarScaleLevels.MONTH.ordinal:
                return (
                    <>
                    </>
                );
            case CalendarScaleLevels.QUARTERS.ordinal:
                break;
            case CalendarScaleLevels.MONTHS.ordinal:
                break;
            case CalendarScaleLevels.YEAR.ordinal:
                break;
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