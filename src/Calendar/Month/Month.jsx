import React, { Component } from 'react';
import './Month.scss';
import { CalendarZoomLevels } from '../calendar-zoom-levels.enum';
import { ZoomLevelContext } from '../Calendar';
import { Layout } from '../../Layout/Layout';

export class Month extends Component {
    renderAtZoomLevel(zoom) {
        switch (Math.floor(zoom)) {
            case CalendarZoomLevels.MONTH.ordinal:
                return (
                    <>
                    </>
                );
            case CalendarZoomLevels.QUARTERS.ordinal:
                break;
            case CalendarZoomLevels.MONTHS.ordinal:
                break;
            case CalendarZoomLevels.YEAR.ordinal:
                break;
            default:
                throw new Error(`unsupported zoom level [${zoom}] for [${this.constructor.name}]`);
        }
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